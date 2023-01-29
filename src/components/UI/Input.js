import React from "react";

const Input = ({ inputType, inputName, inputId, inputValue, setInputValue }) => {
    return (
        <div
            className={inputValue !== "" ? "input input-active input-color" : "input input-color"}
            data-border={inputValue ? "yes" : "no"}
        >
            <input
                className="input-input"
                type={inputType}
                name={inputId}
                id={inputId}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <label className="input-label" htmlFor={inputId}>
                <span>{inputName}</span>
            </label>
        </div>
    );
};

export default Input;
