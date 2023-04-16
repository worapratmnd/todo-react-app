import React, { useState } from "react";
import './AddTask.css';
import { addTask } from "../reducers/todos";
import { ITodo } from "../interfaces/todo";
import { useAppDispatch } from "../reducers/hooks";

const AddTask = () => {
    const dispatch = useAppDispatch();
    const [inputValue, setInputValue] = useState<string>("");
    const [saveBtnVisible, setSaveBtnVisible] = useState<boolean>(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        setSaveBtnVisible(event.target.value.length > 0);
    };

    const handleSaveClick = () => {
        let body: ITodo = {
            id: "12345",
            title: inputValue,
            completed: false,
        }
        dispatch(addTask(body));
        setInputValue("");
        setSaveBtnVisible(false);
    };

    return (
        <div className="add-task-layout">
            {/* <input type="text" name="addtask" placeholder="Add your todo..." /> */}
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Enter your text here"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                {saveBtnVisible && (
                    <button type="button" className="btn-save save-btn" onClick={handleSaveClick}>
                        Save
                    </button>
                )}
            </div>
        </div>
    )
}

export default AddTask;