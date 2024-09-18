import { configureStore } from '@reduxjs/toolkit';
import bookReduser from './books/reducer';
// import { deleteBook } from './books/actionCreators';
import filterReduser from './slices/filterSlice';

const store = configureStore({
  reducer: {
    books: bookReduser,
    // del: deleteBook,
    filter: filterReduser,
  },
});

export default store;
