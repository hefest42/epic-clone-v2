import React from "react";

const Input = ({ inputType, inputName, inputValue, setInputValue }) => {
    return (
        <div
            className={inputValue !== "" ? "input input-active input-color" : "input input-color"}
            data-border={inputValue ? "yes" : "no"}
        >
            <input
                className="input-input"
                type={inputType}
                name="test-input"
                id="test-input"
                onChange={(e) => setInputValue(e.target.value)}
            />
            <label id="two" className="input-label" htmlFor="test-input">
                <span>{inputName}</span>
            </label>
        </div>
    );
};

export default Input;
