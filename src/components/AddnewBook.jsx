import React, { useContext, useState, useEffect } from "react";
import { BooksContext } from "../contexts/BooksContext";
import uuid from "uuid";

const AddNewbookForm = () => {
  const Theme = useContext(BooksContext);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    date: ""
  });
  const { title, author, date } = formData;

  useEffect(() => {
    console.log("use Efffect in the Add new book form ran ", Theme.books);
  }, [Theme.books]);

  const handleOnchange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const id = uuid.v4();
    const NewBook = { id, title, author, date };
    Theme.handleAddBook(NewBook);
    setFormData({ title: "", author: "", date: "" });
  };

  const [age, setAge] = useState(10);
  return (
    <>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              className='form-control'
              name='title'
              value={title}
              onChange={e => handleOnchange(e)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='author'>Author</label>
            <input
              type='text'
              className='form-control'
              name='author'
              value={author}
              onChange={e => handleOnchange(e)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='date'>Year</label>
            <input
              type='date'
              className='form-control'
              name='date'
              value={date}
              onChange={e => handleOnchange(e)}
            />
          </div>
          <button type='submit' className='btn btn-info float-right'>
            Add New Book
          </button>
        </form>
      </div>
      <div>
        <a className='btn btn-info' onClick={() => setAge(age + 10)}>
          {" "}
          {age}
        </a>
      </div>
    </>
  );
};
export default AddNewbookForm;
