import React , {useState} from "react";
import BookForm from "./components/BookForm";
import BookList from './components/BookList';

const App =() => {
  const [books, setBooks] = useState([]);

  const addBook = (book) => {
    setBooks([...books, book]);

  };

  return ( 
    <div className="app">
      <h1>Book Library</h1>

      <BookForm addBook={addBook} />

      <BookList books={books} />
    </div>
  );
};
export default App;
