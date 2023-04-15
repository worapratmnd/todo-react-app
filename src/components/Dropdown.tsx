import React, { useState } from "react";
import './Dropdown.css'
import { IOption } from "../interfaces/options";

interface DropdownProps {
    options: IOption[];
    onChangeOption: (option: IOption) => void
}


const Dropdown: React.FC<DropdownProps> = ({ options, onChangeOption }) => {
    const [selectedOption, setSelectedOption] = useState<IOption | null>(options[0] ?? null);

    const handleOptionClick = (option: IOption) => {
        setSelectedOption(option);
        onChangeOption(option);
    };

    return (
        <div className="dropdown">
            <button className="dropbtn">
                <span>{selectedOption ? selectedOption.label : 'Select an option'}</span>
                <i className="icon fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
                {options.map(option => (
                    <div
                        className="dropdown-item"
                        key={option.value}
                        onClick={() => handleOptionClick(option)}>
                        {option.label}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dropdown;