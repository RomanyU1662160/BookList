import React, { createContext, useState } from "react";

export const BooksContext = createContext();

const BookscontextProvider = props => {
  const [books, setbooks] = useState([]);

  const handleAddBook = book => {
    setbooks([...this.state.books, book]);
  };
  return (
    <BooksContext.Provider value={{ books }}>
      {props.children}
    </BooksContext.Provider>
  );
};

export default BookscontextProvider;
