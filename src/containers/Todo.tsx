import React from "react";
import Progress from "./Progress";
import Tasks from "./Tasks";
import AddTask from "./AddTask";

const Todo = () => (
    <div className="Layout">
        <Progress />
        <Tasks />
        <AddTask />
    </div>
)

export default Todo;