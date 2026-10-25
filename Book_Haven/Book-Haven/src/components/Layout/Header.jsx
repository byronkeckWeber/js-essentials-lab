import booksImage from "../../assets/books.svg";
import HeaderCartButton from "./HeaderCartButton";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Book Haven</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={booksImage} alt="Shelves packed with books in warm earth tones." />
      </div>
    </>
  );
};

export default Header;
