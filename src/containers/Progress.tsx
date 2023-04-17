import React from "react";
import './Progress.css'
import { useAppSelector } from "../reducers/hooks";
import { getTask } from "../reducers/todos";

const Progress = () => {
    const taskList = useAppSelector(getTask);
    let totalComplete = taskList.filter(task => task.completed).length;
    let percent = (totalComplete / taskList.length) * 100;
    return (
        <div className="progress-layout">
            <div>
                <span className="progress-title">Progress</span>
            </div>
            <div className="progress-bar">
                <div className="progress" style={{ width: percent + "%" }}></div>
            </div>
            <div>
                <span className="progress-complete-txt">{totalComplete} Completed</span>
            </div>
        </div>
    )
}

export default Progress;