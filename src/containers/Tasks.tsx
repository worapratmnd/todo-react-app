import React, { useEffect, useState } from "react";
import Dropdown from "../components/Dropdown";
import './Tasks.css';
import { IOption } from "../interfaces/options";
import Task from "./Task";
import { useAppDispatch, useAppSelector } from "../reducers/hooks";
import { fetchTasks, getTask } from "../reducers/todos";
import { ITodo } from "../interfaces/todo";

const options: IOption[] = [
    { value: '1', label: 'All' },
    { value: '2', label: 'Done' },
    { value: '3', label: 'UnDone' },
];

const Tasks = () => {
    const dispatch = useAppDispatch();
    const taskList = useAppSelector(getTask);
    const [selectedOption, setSelectedOption] = useState<IOption>(options[0]);


    useEffect(() => {
        dispatch(fetchTasks())
    }, []);



    const filterTask = (task: ITodo) => {
        if (selectedOption.value === '1') {
            return task;
        } else if (selectedOption.value === '2' && task.completed) {
            return task;
        } else if (selectedOption.value === '3' && !task.completed) {
            return task;
        }
    }

    return (
        <div className="container">
            <div>
                <div className="tasks">
                    <span className="task-title">Tasks</span>
                    <Dropdown options={options} onChangeOption={setSelectedOption} />
                </div>
                {
                    taskList.filter(filterTask).map(task => (
                        <Task key={task.id} task={task} />
                    ))
                }
            </div>
        </div>
    )
}

export default Tasks;