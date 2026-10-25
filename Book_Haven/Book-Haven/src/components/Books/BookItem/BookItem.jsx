import { useContext } from "react";
import styles from "./BookItem.module.css";
import BookItemForm from "./BookItemForm";
import CartContext from "../../../store/cart-context";

const BookItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={styles.book}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <BookItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default BookItem;
