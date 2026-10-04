import styles from './BookmarkItem.module.css';

const BookmarkItem = props => {
  return (
    <li className={styles.item}>
      <div className={styles.title}>
        {/* Added a green title for favorited items and black for not favorited items*/}
        <h3 style={{color: props.isFavorite ? 'green' : 'black'}}>{props.title}</h3>
        <span>{props.category}</span>
      </div>

      <p>
        <a href={props.url} target="_blank" rel="noreferrer">
          {props.url}
        </a>
      </p>

      <div className={styles.buttons}>
        <button className={`${props.isFavorite ? styles.favorite : styles.normal}`} onClick={() => props.onToggleFavorite(props.id)}>
          {props.isFavorite ? '★ Favorited' : '☆ Favorite'}
        </button>
        <button className={styles.delete} onClick={() => props.onDelete(props.id)}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default BookmarkItem;