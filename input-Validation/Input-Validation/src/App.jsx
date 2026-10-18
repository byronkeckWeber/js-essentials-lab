import { useState } from "react";
import useInput from "./hooks/useInput";

function App() {

  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName
  } = useInput((value) => value.trim() !== "");

    const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail
  } = useInput((value) => value.includes("@"));

    const {
    value: phoneNumber,
    isValid: phoneNumberIsValid,
    hasError: phoneNumberHasError,
    valueChangeHandler: phoneNumberChangeHandler,
    inputBlurHandler: phoneNumberBlurHandler,
    reset: resetPhoneNumber
  } = useInput((value) => value.length === 10);


  let formIsValid = false;
  if(nameIsValid && emailIsValid && phoneNumberIsValid)
    formIsValid = true;

  const formSubmitHandler = (event) => {
    event.preventDefault();

    console.log("Submitted Name:", name);
    console.log("Submitted Email:", email);
    console.log("Submitted Phone Number:", phoneNumber);

    // Reset input
    resetName();
    resetEmail();
    resetPhoneNumber();
  };

  const nameClasses = nameHasError ? "form-control invalid" : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";
  const phoneNumberClasses = phoneNumberHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>

      <div className={nameClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameHasError && <p className="error-text">Name must not be empty</p>}
      </div>

      <div className={emailClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && <p className="error-text">Email must contain @.</p>}
      </div>

      <div className={phoneNumberClasses}>
        <label htmlFor="phoneNumber">Your Phone Number</label>
        <input
          type="number"
          id="phoneNumber"
          value={phoneNumber}
          onChange={phoneNumberChangeHandler}
          onBlur={phoneNumberBlurHandler}
        />
        {phoneNumberHasError && <p className="error-text">Phone Number must have exactly 10 digits.</p>}
      </div>

      <div className="form-actions">
        <button type="submit" disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
}

export default App;
