import React, { useEffect, useState } from "react";
import './Task.css'
import { ITodo } from "../interfaces/todo";
import { useAppDispatch } from "../reducers/hooks";
import { deleteTask, toggleTask, updateTask } from "../reducers/todos";

interface TaskProps {
    task: ITodo
}

const Task: React.FC<TaskProps> = ({ task }) => {
    const dispatch = useAppDispatch();
    const [mode, setMode] = useState<string>('view');
    const [title, setTitle] = useState<string>(task.title);

    // useEffect(() => {})

    const onEdit = () => {
        setMode('edit');
    }

    const onDelete = () => {
        dispatch(deleteTask(task))
    }

    const onUpdate = () => {
        dispatch(updateTask({ ...task, title: title }))
        setMode('view');
    }

    const onComplete = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(toggleTask(task))
    }

    return (
        <div className="task-box">
            {mode === "view" &&
                (
                    <>
                        <label className="checkbox-container" style={{
                            textDecoration: task.completed ? 'line-through' : 'none'
                        }}>
                            <span>{title}</span>
                            <input type="checkbox" checked={task.completed} onChange={onComplete} />
                            <span className="checkmark"></span>
                        </label>
                        <div className="dropdown">
                            <button className="dropbtn btn-dp"> <i className="fa fa-bars"></i></button>
                            <div className="dropdown-content">
                                <div className="dropdown-item" onClick={onEdit}>Edit</div>
                                <div className="dropdown-item delete-txt" onClick={onDelete}>Delete</div>
                            </div>
                        </div>
                    </>
                )}
            {mode === "edit" && (
                <>
                    <div className="w-full">
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div>
                        <button type="button" className="btn-save" onClick={onUpdate}>Save</button>
                    </div>
                </>
            )}

        </div>
    )
}


export default Task;