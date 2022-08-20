import React from "react";

const SignUp = () => {
    return (
        <form className="form center-column" onSubmit={formSubmitHandler}>
            <div className="form__inner">
                <div className="form-logo center-column">
                    <Link to="/">
                        <SiEpicgames />
                    </Link>
                    <h3>Sign in with a Game Store Account</h3>
                </div>

                <FormInputs
                    emailValue={emailInputValue}
                    changeEmailValue={setEmailInputValue}
                    emailRef={emailRef}
                    passwordValue={passwordInputValue}
                    changePasswordValue={setPasswordInputValue}
                    passwordRef={passwordRef}
                />

                <div
                    className={
                        emailInputValue && passwordInputValue ? "form-button form-button__active" : "form-button"
                    }
                >
                    <button>LOG IN NOW</button>
                </div>

                <div className="form-link center">
                    <div>Don't have an Game Store Account?</div>
                    <Link to="sign-up">Sign Up</Link>
                </div>
            </div>
        </form>
    );
};

export default SignUp;
