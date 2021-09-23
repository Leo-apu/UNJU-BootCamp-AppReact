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
                            <a href="#">Character </a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}