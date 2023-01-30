import React from "react";

const Input = ({ inputType, inputName, inputId, inputValue, setInputValue, autocomplete }) => {
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
                autoComplete={autocomplete}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <label className="input-label" htmlFor={inputId}>
                <span>{inputName}</span>
            </label>
        </div>
    );
};

export default Input;
