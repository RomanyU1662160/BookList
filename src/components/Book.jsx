import React from "react";

const Book = props => {
  return (
    <>
      <div className='card col-md-6 '>
        <h3 className='card-title text-info bg-dark'>
          Title :: {props.book.title}{" "}
        </h3>

        <div className='card-body'>
          <div className='row'>
            <div className='col-md-6'>Author :: {props.book.author}</div>
            <div className='col-md-6'>Published on : {props.book.date} </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;
