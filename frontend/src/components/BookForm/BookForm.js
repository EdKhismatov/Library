import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/actionCreators';
// import { v4 as uuidv4 } from 'uuid';
import createBookWithID from '../utils/createBookWithID';
import booksData from '../../data/books.json';
import './BookForm.css';

export default function BookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleAddRandomBook = () => {
    console.log(booksData);
    const randomIndex = Math.floor(Math.random() * booksData.length);
    const randomBook = booksData[randomIndex];
    const randomBookWithId = createBookWithID(randomBook);
    dispatch(addBook(randomBookWithId));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      const book = createBookWithID({title, author});
      dispatch(addBook(book));
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <div className="app-block book-form">
      <h2>Add a new Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit">Add Book</button>
        <button type="button" onClick={handleAddRandomBook}>
          Random
        </button>
      </form>
    </div>
  );
}
