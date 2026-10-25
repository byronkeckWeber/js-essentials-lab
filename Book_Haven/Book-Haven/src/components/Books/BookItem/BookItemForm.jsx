import { useRef, useState } from "react";
import styles from "./BookItemForm.module.css";
import Input from "../../UI/Input";

const BookItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    // Only read the value on submit, so typing does not re-render
    const enteredAmount = amountInputRef.current.value;

    // The + turns the string into a number
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    setAmountIsValid(true);

    // Sends the amount up to BookItem, which adds it to the cart
    props.onAddToCart(enteredAmountNumber);
  };

  // noValidate so the browser does not block 0 or 7 before my own error message can show
  return (
    <form className={styles.form} onSubmit={submitHandler} noValidate>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default BookItemForm;
