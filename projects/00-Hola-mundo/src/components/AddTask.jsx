/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars

import { useState } from "react";

export const AddTask = ({addTask}) => {
    const [inputValue, setInputValue] = useState('');
    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }
    const onSubmit = (event) =>{
        event.preventDefault();
        addTask(inputValue)
    }
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}