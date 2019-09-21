import React, { Component, createContext } from "react";

export const BooksContext = createContext();

export default class BooksProvider extends Component {
  state = {
    books: []
  };
  handleAddBook = book => {
    this.setState({
      books: [...this.state.books, book]
    });
  };
  render() {
    return (
      <BooksContext.Provider
        value={{ ...this.state, handleAddBook: this.handleAddBook }}>
        {this.props.children}
      </BooksContext.Provider>
    );
  }
}
