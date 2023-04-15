import React from "react";
import './Progress.css'

const Progress = () => {

    return (
        <div className="progress-layout">
            <div>
                <span className="progress-title">Progress</span>
            </div>
            <div className="progress-bar">
                <div className="progress"></div>
            </div>
            <div>
                <span className="progress-complete-txt">12 Completed</span>
            </div>
        </div>
    )
}

export default Progress;