import { useState, useReducer, useEffect } from 'react';
// Importing components
import BookmarkInput from './components/BookmarkInput';
import BookmarkList from './components/BookmarkList';
import BookmarkNotice from './components/BookmarkNotice';
import './App.css'

const INITIAL_BOOKMARKS = [
  { id: 'b1', title: 'React Documentation', url: 'https://react.dev', category: 'Documentation', isFavorite: true },
  { id: 'b2', title: 'Vite Guide', url: 'https://vite.dev', category: 'Tools', isFavorite: false },
  { id: 'b3', title: 'MDN Web Docs', url: 'https://developer.mozilla.org', category: 'Documentation', isFavorite: false }
];

// bookmarks and selectedCategory now are here instead of two useState hooks
const bookmarkReducer = (state, action) => {
  if (action.type === 'ADD_BOOKMARK') {
    const newBookmark = {
      id: Math.random().toString(),
      title: action.title,
      url: action.url,
      category: action.category,
      isFavorite: false
    };
    return {
      ...state,
      bookmarks: [newBookmark, ...state.bookmarks]
    };
  }

  if (action.type === 'TOGGLE_FAVORITE') {
    return {
      ...state,
      bookmarks: state.bookmarks.map(item =>
        item.id === action.id ? { ...item, isFavorite: !item.isFavorite } : item
      )
    };
  }

  if (action.type === 'DELETE_BOOKMARK') {
    return {
      ...state,
      bookmarks: state.bookmarks.filter(item => item.id !== action.id)
    };
  }

  if (action.type === 'SET_CATEGORY') {
    return {
      ...state,
      selectedCategory: action.category
    };
  }

  if (action.type === 'LOAD_BOOKMARKS') {
    return {
      ...state,
      bookmarks: action.bookmarks
    };
  }

  return state;
};

const App = () => {
  const [state, dispatch] = useReducer(bookmarkReducer, {
    bookmarks: INITIAL_BOOKMARKS,
    selectedCategory: 'All'
  });

  const { bookmarks, selectedCategory } = state;

  const [notice, setNotice] = useState(null);

  // same localStorage pattern as the Login project
  useEffect(() => {
    const storedBookmarks = localStorage.getItem('bookmarks');

    if (storedBookmarks) {
      dispatch({ type: 'LOAD_BOOKMARKS', bookmarks: JSON.parse(storedBookmarks) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const addBookmarkHandler = (title, url, category) => {
    dispatch({ type: 'ADD_BOOKMARK', title, url, category });
    setNotice({ text: 'Bookmark added!', id: Date.now() });
  };

  const toggleFavoriteHandler = id => {
    dispatch({ type: 'TOGGLE_FAVORITE', id });
  };

  const deleteBookmarkHandler = id => {
    dispatch({ type: 'DELETE_BOOKMARK', id });
  };

  const filteredBookmarks = selectedCategory === 'All'
    ? bookmarks
    : bookmarks.filter(b => b.category === selectedCategory);

  return (
    <div className='DevDeck'>
      <BookmarkNotice notice={notice} onClear={setNotice} />

      <header>
        <h1>DevDeck</h1>
        <p>Your Developer Resource Hub</p>
      </header>

      <main>
        <section>
          <BookmarkInput onAddBookmark={addBookmarkHandler} />
        </section>

        <section>
          <div className='filter'>
            <label>Filter by Category: </label>
            <select
              value={selectedCategory}
              onChange={e => dispatch({ type: 'SET_CATEGORY', category: e.target.value })}
            >
              <option value="All">All Categories</option>
              <option value="Documentation">Documentation</option>
              <option value="Tools">Tools</option>
              <option value="Tutorials">Tutorials</option>
            </select>
          </div>
          <BookmarkList
            items={filteredBookmarks}
            onToggleFavorite={toggleFavoriteHandler}
            onDelete={deleteBookmarkHandler}
          />
        </section>
      </main>
    </div>
  );
};

export default App;