import { useState } from "react";
import { TodoForm } from "./TodoForm";
import { List } from "./List";
import { DateTime } from "./DateTime";
import { getTodoData, setTodoData } from "./LocalStorage";

export const Todo = () => {
  const [task, setTask] = useState(() => getTodoData())

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;

    if (!content) {alert('Task cannot be empty'); return;};
    const matchedContent = task.find((current) => current.content === content);
    if (matchedContent) {alert('Task already exist'); return;};

    setTask((prevData) => [...prevData, { id, content, checked }]);
  };

  // handle Delete Task Button
  const handleDeleteTodo = (value) => {
    let updatedTasks = task.filter((task) => task.content !== value);
    setTask(updatedTasks);
  };

  // set local storage data
  setTodoData(task)
  // handle Checked Task Button
  const handleCheckedTodo = (content) => {
    const updatedTasks = task.map((currTask) => {
      if (currTask.content === content) {
        return { ...currTask, checked: !currTask.checked };
      } else {
        return currTask;
      }
    })

    setTask(updatedTasks)
  };

  return (
    <section className="main_section">
      <header>
        <h1 className="title">Daily Work Planner</h1>
        <DateTime />
      </header>
      <TodoForm onTodoAdd={handleFormSubmit} />
      <section className="all_task_section">
        <div className="all_task_header">
          <h1>All Tasks</h1>
          <button
            onClick={() => {
              task.length === 0 ? alert("nothing in list") : setTask([]);
            }}
          >
            Clear All
          </button>
        </div>

        <ul className="task_list">
          {task.map((currTask) => {
            return (
              <List
                key={currTask.id}
                data={currTask.content}
                checked={currTask.checked}
                handleDelete={handleDeleteTodo}
                handleChecked={handleCheckedTodo}
              />
            );
          })}
        </ul>
      </section>
    </section>
  );
};
