import { useState } from "react";

export const TodoForm = ({ onTodoAdd }) => {
    const [inputValue, setInputValue] = useState({});

    const handleInputChange = (value) =>{
        setInputValue({id: value, content: value, checked: false})
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()

        onTodoAdd(inputValue)
        setInputValue({id: '', content: '', checked: false });


    }

    return (
        <section>
            <form onSubmit={handleFormSubmit}>
                <div className="input_field">
                    <input
                        type="text"
                        placeholder="Enter Your Task here"
                        value={inputValue.content}
                        onChange={(e) => handleInputChange(e.target.value)}
                        autoComplete="off"
                    />
                </div>
                <div className="submit_btn">
                    <button type="submit">Add Task</button>
                </div>
            </form>
        </section>
    )
}