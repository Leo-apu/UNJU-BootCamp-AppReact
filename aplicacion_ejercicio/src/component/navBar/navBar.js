import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
export default class NavBar extends React.Component{
    render(){
        return (
            <header className="header">
                <nav className= "nav">
                    <div><NavLink exact to="/home" activeClassName="active">NARUTO SHIPPUDEN</NavLink></div>
                    <ul className="links">
                        <li>
                            <NavLink exact to="/characterDetail" activeClassName="active">Character</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/about" activeClassName="active">About</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}