import React, { Fragment } from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Booklist from "./components/Booklist";
import Landing from "./components/Landing";
import { ThemeProvider } from "./contexts/ThemeContext";
import Themes from "./themes";

const Books = [
  {
    name: "book1 Name",
    Author: "Book1 Author",
    Year: "Bookk 1 Year 1990"
  },
  {
    name: "book2 Name",
    Author: "Book2 Author",
    Year: "Book2 Year 1990"
  },
  {
    name: "book3 Name",
    Author: "Book3 Author",
    Year: "Book3 Year 1990"
  },
  {
    name: "book4 Name",
    Author: "Book4 Author",
    Year: "Bookk4 Year 1990"
  },

  {
    name: "book5 Name",
    Author: "Book5 Author",
    Year: "Bookk5 Year 1990"
  }
];

function App() {
  return (
    <ThemeProvider value={Themes}>
      <BrowserRouter>
        <Fragment>
          <NavBar></NavBar>
          <div className='container-fluid'>
            <Switch>
              <Route exact path='/' component={Landing}></Route>
              <Route exact path='/booklist' component={Booklist}></Route>
            </Switch>
          </div>

          {/* <Booklist></Booklist> */}
        </Fragment>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
