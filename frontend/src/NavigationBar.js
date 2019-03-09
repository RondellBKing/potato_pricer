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

class NavigationBar extends Component {
  render() {
    return (
        <HashRouter>
        <div>
            <Navbar bg="light" expand="lg" variant="light" sticky="top">
                <Navbar.Brand href="/">{'Potato-Pricer'} </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" variant="pills" defaultActiveKey="/">
                        <Nav.Item>
                            <Nav.Link><NavLink to="/app"> Pricer </NavLink> </Nav.Link>
                         </Nav.Item>
                        <Nav.Item>
                            <Nav.Link><NavLink to="/contact"> Contact< /NavLink> </Nav.Link>
                         </Nav.Item>
                    </Nav>
                    <Navbar.Text>
                        Signed in as: <a href="#login">Rondell</a>
                    </Navbar.Text>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-primary">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
        </HashRouter>
        )
    }
}
export default NavigationBar;
