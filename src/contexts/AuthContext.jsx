import React, { Component, createContext } from "react";

export const AuthContext = createContext();
export const AuthContextProvider = AuthContext.Provider;
export const AuthContextConsumer = AuthContext.Consumer;

export default class AuthProvider extends Component {
  state = {
    isAuth: false
  };

  handleToggleAuth = () => {
    this.setState({ isAuth: !this.state.isAuth });
  };
  render() {
    return (
      <AuthContextProvider
        value={{
          ...this.state,
          handleToggleAuth: this.handleToggleAuth
        }}>
        {this.props.children}
      </AuthContextProvider>
    );
  }
}
