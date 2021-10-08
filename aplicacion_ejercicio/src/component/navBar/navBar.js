import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav"

export default class NavBar extends React.Component{
    render(){
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand><NavLink className="ite" exact to="/" activeClassName="active">NARUTO SHIPPUDEN</NavLink></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto justify-content-end">
                <Nav.Link ><NavLink className="ite" exact to="/characterDetail" activeClassName="">Character</NavLink></Nav.Link>
                <Nav.Link ><NavLink className="ite" exact to="/about" activeClassName="">About</NavLink></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        );
    }
}