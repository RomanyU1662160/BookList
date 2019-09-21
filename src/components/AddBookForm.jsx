import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export class AddBookForm extends Component {
  handleChange = e => {
    console.log(e.target.value);
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.value);
  };
  render() {
    return (
      <>
        <ThemeContext.Consumer>
          {context => {
            return (
              <div className='container'>
                <form onSubmit={this.handleSubmit}>
                  <div className='form-group'>
                    <label htmlFor='title'>Title</label>
                    <input
                      type='text'
                      className='form-control'
                      name='title'
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='author'>Author</label>
                    <input
                      type='text'
                      className='form-control'
                      name='author'
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='date'>Year</label>
                    <input
                      type='date'
                      className='form-control'
                      name='date'
                      onChange={this.handleChange}
                    />
                  </div>
                  <button
                    type='submit'
                    className={
                      context.isLightTheme
                        ? "btn float-right btn-info"
                        : "btn float-right btn-" + context.DarkTheme.name
                    }>
                    Add New Book
                  </button>
                </form>
              </div>
            );
          }}
        </ThemeContext.Consumer>
      </>
    );
  }
}

export default AddBookForm;
