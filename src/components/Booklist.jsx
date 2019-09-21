import React, { useContext, useEffect } from "react";
//import Themes from "../themes";
import { BooksContext } from "../contexts/BooksContext";
import Book from "./Book";

const Booklist = () => {
  const booksContext = useContext(BooksContext);
  useEffect(() => {
    console.log("Use Effect ran ", booksContext.books);
  });

  console.log(booksContext);
  return (
    <>
      <div className='row'>
        {booksContext.books.map(book => (
          <Book book={book} key={book.id}></Book>
        ))}
      </div>
    </>
  );
};

export default Booklist;
