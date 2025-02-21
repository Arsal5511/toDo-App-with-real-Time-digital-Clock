import { MdCheck, MdDelete } from "react-icons/md";

export const List = ({ data, checked, handleDelete, handleChecked }) => {
    return (
        <li>
            <span className={checked ? "checked" : "taskDone"}>{data}</span>
            <div className="btns">
                <button onClick={() => handleChecked(data)}>
                    <MdCheck />
                </button>
                <button onClick={() => handleDelete(data)} >
                    <MdDelete/>
                </button>
            </div>
        </li>
    );
};
