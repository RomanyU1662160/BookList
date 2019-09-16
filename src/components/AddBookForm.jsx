import React, { Component } from "react";
import { ThemeContext, ThemeConsumer } from "../contexts/ThemeContext";

export class AddBookForm extends Component {
  render() {
    return (
      <>
        <ThemeConsumer>
          {context => {
            return (
              <div className='container'>
                <form action='' method='post'>
                  <div className='form-group'>
                    <label htmlFor='title'>Title</label>
                    <input type='text' className='form-control' name='title' />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='author'>Author</label>
                    <input type='text' className='form-control' name='author' />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='date'>Year</label>
                    <input type='date' className='form-control' name='date' />
                  </div>
                  <button
                    type='submit'
                    className={
                      context.isLightTheme
                        ? "btn float-right btn-" + "info"
                        : "btn float-right btn-" + context.DarkTheme.name
                    }>
                    Add New Book
                  </button>
                </form>
              </div>
            );
          }}
        </ThemeConsumer>
      </>
    );
  }
}

export default AddBookForm;
