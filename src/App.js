import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./Signup";
import ButtonAppBar from "./ButtonAppBar";
import Footer from "./Footer";
import ListProperty from "./ListProperty";
import SearchPage from "./SearchPage";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Contact from "./Contact"

export default function App() {
  return (
    <div className="App">
      <Router>
        <ButtonAppBar/>
        <Switch>
          <Route path="/" exact component={() => <Home/>} />
          <Route path="/About" exact component={() => <About />} />
          <Route path="/SignUp" exact component={() => <SignUp/>} />
          <Route path="/Login" exact component={() => <Login/>} />
          <Route path="/SearchPage" exact component={() => <SearchPage/>} />
          <Route path="/ListProperty" exact component={() => <ListProperty/>} />
          <Route path="/Contact" exact component={() => <Contact/>} />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}
