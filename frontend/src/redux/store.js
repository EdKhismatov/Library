import { configureStore } from '@reduxjs/toolkit';
import bookReduser from './books/reducer';
import { deleteBook } from './books/actionCreators';
const store = configureStore({
  reducer: {
    books: bookReduser,
    del: deleteBook,
  },
});

export default store;
