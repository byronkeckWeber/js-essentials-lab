import { forwardRef } from "react";
import styles from "./Input.module.css";

// forwardRef so BookItemForm can put a ref on the input that is inside this component
const Input = forwardRef((props, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
