import React, { useContext } from "react";
//import Themes from "../themes";
import { ThemeContext } from "../contexts/ThemeContext";
import Book from "./Book";

const Booklist = () => {
  const Books = useContext(ThemeContext);
  console.log(Books);
  return (
    <>
      <div className='container mt-5'>
        <ul className='list-group'>
          {Books.map(book => (
            <Book book={book} key={book.name}></Book>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Booklist;
