import React, { Component } from "react";
import {Navbar, Nav}  from "react-bootstrap";
import {
  NavLink,
  HashRouter
} from "react-router-dom";

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
                            <Nav.Link><NavLink to="/AddPrices"> Add Pricing </NavLink> </Nav.Link>
                         </Nav.Item>
                        <Nav.Item>
                            <Nav.Link><NavLink to="/contact"> Contact< /NavLink> </Nav.Link>
                         </Nav.Item>
                    </Nav>
                    <Navbar.Text>
                        Signed in as: <a href="#login">Rondell King</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </div>
        </HashRouter>
        )
    }
}
export default NavigationBar;
