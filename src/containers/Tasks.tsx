import React, { useEffect, useState } from "react";
import Dropdown from "../components/Dropdown";
import './Tasks.css';
import { IOption } from "../interfaces/options";
import Task from "../components/Task";
import { useAppSelector } from "../reducers/hooks";
import { getTask } from "../reducers/todos";

const options: IOption[] = [
    { value: '1', label: 'All' },
    { value: '2', label: 'Done' },
    { value: '3', label: 'UnDone' },
];

const Tasks = () => {
    const taskList = useAppSelector(getTask);
    const [selectedOption, setSelectedOption] = useState<IOption>(options[0]);
    useEffect(() => {
        console.log(taskList)
    }, [taskList])

    return (
        <div className="container">
            <div>
                <div className="tasks">
                    <span className="task-title">Tasks</span>
                    <Dropdown options={options} onChangeOption={setSelectedOption} />
                </div>
                {
                    taskList.map(task => (
                        <Task key={task.id} task={task} />
                    ))
                }
            </div>
        </div>
    )
}

export default Tasks;