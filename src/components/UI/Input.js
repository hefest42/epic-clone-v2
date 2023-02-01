import React from "react";

const Input = ({ inputType, inputName, inputId, inputValue, setInputValue, autocomplete, theme }) => {
    const lightStyles = inputValue !== "" ? "input input-active input-color__dark" : "input input-color__dark";
    const darkStyles = inputValue !== "" ? "input input-active input-color__light" : "input input-color__light";

    const test = theme === "light" ? lightStyles : darkStyles;

    return (
        <div className={test} data-border={inputValue ? "yes" : "no"}>
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
