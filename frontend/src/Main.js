import React, { Component } from "react";
import {
  Route,
  HashRouter
} from "react-router-dom";

import Home from "./Home";
import AddPrices from "./AddPrices";
import Contact from "./Contact";
import NavigationBar from "./NavigationBar";

class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
            <NavigationBar />
            <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/AddPrices" component={AddPrices}/>
                <Route exact path="/contact" component={Contact}/>
            </div>
        </div>
        </HashRouter>
        )
    }
}
export default Main;
