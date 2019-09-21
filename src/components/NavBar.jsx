import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import ToggleTheme from "./ToggleTheme";
import { AuthContext } from "../contexts/AuthContext";

export class Navbar extends Component {
  static contextType = ThemeContext;

  render() {
    const light = this.context.LightTheme.name;
    const dark = this.context.DarkTheme.name;
    const isLightTheme = this.context.isLightTheme;
    console.log("Themes props ::" + JSON.stringify(this.props.children));
    return (
      <>
        <AuthContext.Consumer>
          {authcontext => {
            return (
              <>
                <nav
                  className={
                    isLightTheme
                      ? "navbar navbar-expand-lg  navbar-light bg-" + dark
                      : "navbar navbar-expand-lg navbar-light bg-" + light
                  }>
                  <Link className='navbar-brand' to='/'>
                    Context-api and Hooks course
                  </Link>
                  <button
                    className='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbarSupportedContent'
                    aria-controls='#navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                  </button>

                  <div
                    className='collapse navbar-collapse'
                    id='navbarSupportedContent'>
                    <ul className='navbar-nav mr-auto'>
                      <li className='nav-item active'>
                        <Link to='/booklist' className='nav-link'>
                          Book List
                        </Link>
                      </li>

                      <li className='nav-item dropdown'>
                        <Link
                          className='nav-link dropdown-toggle'
                          to='/'
                          id='navbarDropdown'
                          role='button'
                          data-toggle='dropdown'
                          aria-haspopup='true'
                          aria-expanded='false'>
                          App menu
                        </Link>
                        <div
                          className='dropdown-menu'
                          aria-labelledby='navbarDropdown'>
                          <Link className='dropdown-item' to='/bookklist '>
                            Books list
                          </Link>
                          <Link className='dropdown-item' to='/ '>
                            Login
                          </Link>
                          <div className='dropdown-divider'></div>
                          <Link className='dropdown-item' to='/booklist'>
                            Book list
                          </Link>
                        </div>
                      </li>
                    </ul>

                    {!authcontext.isAuth ? (
                      <ul className='navbar-nav ml-auto'>
                        <li className='nav-item'>
                          <Link
                            to='/'
                            className='nav-link'
                            onClick={authcontext.handleToggleAuth}>
                            Login
                          </Link>
                        </li>
                        <li className='nav-item'>
                          <Link to='/' className='nav-link'>
                            Register
                          </Link>
                        </li>
                      </ul>
                    ) : (
                      <ul className='navbar-nav ml-auto'>
                        <li className='nav-item'>
                          <Link
                            to='/'
                            className='nav-link'
                            onClick={authcontext.handleToggleAuth}>
                            Logout
                          </Link>
                        </li>

                        <li className='nav-item'>
                          <Link to='/' className='nav-link'>
                            <ToggleTheme></ToggleTheme>
                          </Link>
                        </li>
                      </ul>
                    )}
                  </div>
                </nav>
              </>
            );
          }}
        </AuthContext.Consumer>
      </>
    );
  }
}

export default Navbar;
