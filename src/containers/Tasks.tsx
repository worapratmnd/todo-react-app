import React, { useEffect, useState } from "react";
import Dropdown from "../components/Dropdown";
import './Tasks.css';
import { IOption } from "../interfaces/options";

const options: IOption[] = [
    { value: '1', label: 'All' },
    { value: '2', label: 'Done' },
    { value: '3', label: 'UnDone' },
];

const Tasks = () => {
    const [selectedOption, setSelectedOption] = useState<IOption>(options[0]);

    useEffect(() => {
        console.log(selectedOption)
    }, [selectedOption])

    return (
        <div className="container">
            <div className="tasks">
                <span className="task-title">Tasks</span>
                <Dropdown options={options} onChangeOption={setSelectedOption} />
            </div>
        </div>
    )
}

export default Tasks;