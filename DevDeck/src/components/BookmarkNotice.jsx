import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './BookmarkNotice.module.css';

const BookmarkNotice = ({ notice, onClear }) => {

  useEffect(() => {
    if (!notice) return;

    const timerId = setTimeout(() => {
      onClear(null);
    }, 2500);  // clears itself after 2.5s

    return () => clearTimeout(timerId);
  }, [notice, onClear]);

  if (!notice) {
    return null;
  }

  // renders into #notice-root, see index.html
  return createPortal(
    <div className={styles.notice}>{notice.text}</div>,
    document.getElementById('notice-root')
  );
};

export default BookmarkNotice;