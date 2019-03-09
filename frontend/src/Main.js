import React, { Component } from "react";
import {Navbar, Nav, Form, FormControl, Button}  from "react-bootstrap";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Home from "./Home";
import App from "./App";
import Contact from "./Contact";
import NavigationBar from "./NavigationBar";

class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
            <NavigationBar />
            <div className="content">
                <Route exact path="/" component={Home}/>
                <Route exact path="/app" component={App}/>
                <Route exact path="/contact" component={Contact}/>
            </div>
        </div>
        </HashRouter>
        )
    }
}
export default Main;
