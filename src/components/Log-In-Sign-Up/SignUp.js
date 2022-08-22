import React from "react";

import SignUpFormInputs from "./SignUpFormInputs";

import { Link } from "react-router-dom";
import { SiEpicgames } from "react-icons/si";

const SignUp = () => {
    return (
        <form className="form center-column">
            <div className="form-inner">
                <div className="form-logo center-column">
                    <Link to="/">
                        <SiEpicgames />
                    </Link>
                    <h3>Sign Up</h3>
                </div>

                <SignUpFormInputs />

                <div>
                    <div>
                        <input type="checkbox" name="" id="" />
                        <div>I would like to receive news, surveys and special offers from Game Store</div>
                    </div>
                    <div>
                        <input type="checkbox" name="" id="" />
                        <div>I have read and agree to the terms of service</div>
                    </div>
                </div>

                <div>
                    <button>LOG IN NOW</button>
                </div>

                <div className="form-link center">
                    <div>Have an Game Store Account?</div>
                    <Link to="/log-in">Log In</Link>
                </div>
            </div>
        </form>
    );
};

export default SignUp;

// className={emailInputValue && passwordInputValue ? "form-button form-button__active" : "form-button"}
