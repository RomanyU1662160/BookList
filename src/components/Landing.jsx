import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
const Landing = () => {
  const Theme = useContext(ThemeContext);
  console.log(Theme);
  const dark = Theme.DarkTheme.name;
  const light = Theme.LightTheme.name;
  return (
    <>
      <div
        className={
          Theme.isLightTheme ? "jumbotron bg-" + light : "jumbotron bg-" + dark
        }>
        <h1 className='display-4 text-info'>The Booking-List app </h1>
        <p className='lead text-info'>Welcome to this simple app </p>

        <p className='text-warning'>It uses context-api and hooks. </p>
        <Link
          to='/booklist'
          className='btn btn-primary btn-lg'
          href=''
          role='button'>
          Learn more
        </Link>
      </div>
    </>
  );
};

export default Landing;
