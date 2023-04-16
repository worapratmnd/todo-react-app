import React, { useEffect, useState } from "react";
import './Task.css'

interface TaskProps {

}

const Task: React.FC<TaskProps> = () => {
    const [mode, setMode] = useState<string>('view');

    // useEffect(() => {})

    const onEdit = () => {
        setMode('edit');
    }

    const onDelete = () => {
        // setMode('delete');
    }

    const onUpdate = () => {
        setMode('view');
    }

    return (
        <div className="task-box">
            {mode === "view" &&
                (
                    <>
                        <label className="checkbox-container">
                            <span>Checkbox</span>
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <div className="dropdown">
                            <button className="dropbtn btn-dp"> <i className="fa fa-bars"></i></button>
                            <div className="dropdown-content">
                                <div className="dropdown-item" onClick={onEdit}>Edit</div>
                                <div className="dropdown-item" onClick={onDelete}>Delete</div>
                            </div>
                        </div>
                    </>
                )}
            {mode === "edit" && (
                <>
                    <div className="w-full">
                        <input type="text" />
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