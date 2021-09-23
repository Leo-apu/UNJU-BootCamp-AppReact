import React from "react"
import "./navbar.css"

export default class NavBar extends React.Component{
    render(){
        return (
            <header className="header">
                <nav className= "nav">
                    <div>NARUTO SHIPPUDEN</div>
                    <ul className="links">
                        <li>
                            <a href="javasript: void(0)">Character </a>
                        </li>
                        <li>
                            <a href="javasript: void(0)">About</a>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}