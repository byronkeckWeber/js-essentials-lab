import { useEffect, useState } from "react";
import styles from "./AvailableBooks.module.css";
import Card from "../UI/Card";
import BookItem from "./BookItem/BookItem";
import { FIREBASE_URL } from "../../firebase-config";

const AvailableBooks = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(`${FIREBASE_URL}/books.json`);

        if (!response.ok)
          throw new Error("Request failed with status " + response.status);

        const responseData = await response.json();

        // Firebase sends an object, so turn it into an array
        const loadedBooks = [];
        for (const key in responseData) {
          loadedBooks.push({
            id: key,
            name: responseData[key].name,
            description: responseData[key].description,
            price: responseData[key].price,
          });
        }

        setBooks(loadedBooks);
      } catch {
        setHttpError("Failed to load books. Please try again later.");
      }

      setIsLoading(false);
    };

    fetchBooks();
  }, []);

  if (isLoading) {
    return (
      <section className={styles.BooksLoading}>
        <p>Loading books...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={styles.BooksError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const booksList = books.map((book) => (
    <BookItem
      id={book.id}
      key={book.id}
      name={book.name}
      description={book.description}
      price={book.price}
    />
  ));

  return (
    <section className={styles.books}>
      <Card>
        {books.length === 0 ? <p>No books found.</p> : <ul>{booksList}</ul>}
      </Card>
    </section>
  );
};

export default AvailableBooks;
