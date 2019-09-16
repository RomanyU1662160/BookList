import React from "react";

const Book = props => {
  return (
    <>
      <div className='card'>
        <div className='card-header'>
          <h3 className='card-title text-info'>{props.book.name} </h3>
        </div>
      </div>
    </>
  );
};

export default Book;
