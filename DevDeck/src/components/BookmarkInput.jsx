import { useState } from 'react';
import styles from './BookmarkInput.module.css';
import SubmitButton from './BookmarkInput.styled';

const BookmarkInput = props => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [category, setCategory] = useState('Documentation');
  const [isValid, setIsValid] = useState(true);

  const submitHandler = event => {
    // Missing e.preventDefault() here!
    event.preventDefault();

    if (title.trim().length === 0 || url.trim().length === 0) {
      setIsValid(false);
      return;
    }

    props.onAddBookmark(title, url, category);
    setTitle('');
    setUrl('');
    setCategory('Documentation');
    setIsValid(true);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div>
        <h2>Add New Resource</h2>
      </div>

      <div className={`${styles.field} ${!isValid ? styles.invalid : ''}`}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={e => {
            setTitle(e.target.value);
            if (e.target.value.trim().length > 0) setIsValid(true);
          }}
        />
      </div>

      <div className={`${styles.field} ${!isValid ? styles.invalid : ''}`}>
        <label>URL</label>
        <input
          type="text"
          value={url}
          onChange={e => {
            setUrl(e.target.value);
            if (e.target.value.trim().length > 0) setIsValid(true);
          }}
        />
      </div>

      <div className={styles.field}>
        <label>Category</label>
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option value="Documentation">Documentation</option>
          <option value="Tools">Tools</option>
          <option value="Tutorials">Tutorials</option>
        </select>
      </div>

      {!isValid && <p className={styles.error}>Please fill out both the Title and URL fields.</p>}

      <SubmitButton type="submit">Add Bookmark</SubmitButton>
    </form>
  );
};

export default BookmarkInput;