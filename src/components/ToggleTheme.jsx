import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default class ToggleTheme extends Component {
  static contextType = ThemeContext;

  handleThemecontext = () => {
    console.log("toggle theme clicked");
    console.log(this.context.isLightTheme);
    return (this.context.isLightTheme = !this.context.isLightTheme);
    //return { ...this.context, isLightTheme: !this.context.isLightTheme };
  };
  toggletheme = () => {
    return this.handleThemecontext();
  };
  render() {
    return (
      <div>
        <button className='btn btn-info' onClick={this.handleThemecontext}>
          Change Theme
        </button>
      </div>
    );
  }
}
