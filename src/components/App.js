import React from "react";
import "./UI/App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import Signup from "./UI/Auth/Signup";
import Header from "./UI/Header";
import Footer from "./UI/Footer";
import theme from "./UI/AppTheme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header/>
     
        <Switch>
          <Route exact path="/"  component={() => <div>Home</div>}></Route>
          <Route exact path="/Offered"  component={() => <div>Offered</div>}></Route>
          {/* <Route exact path="/Writing"  component={() => <div>Writing</div>}></Route>
          <Route exact path="/Filmmaking"  component={() => <div>Filmmaking</div>}></Route>
          <Route exact path="/Robotics"  component={() => <div>Robotics</div>}></Route>
          <Route exact path="/AppMaking"  component={() => <div>AppMaking</div>}></Route>
          <Route exact path="/Baking"  component={() => <div>Baking</div>}></Route> */}
          <Route exact path="/About"  component={() => <div>About</div>}></Route>
          <Route exact path="/Contact"  component={() => <div>Contact</div>}></Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
