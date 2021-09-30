/* eslint-disable no-template-curly-in-string */
import React from "react";
import "./card.css";
import { NavLink } from "react-router-dom";

const Card = (props) => {
        return(
            <div className="card">
                <div>
                    <img src={props.images} alt="imagen"></img>
                </div>
                <div className="name">
                    <NavLink to={'/characterDetailId/ ${props.id}'}>
                        {props.name}
                    </NavLink>
                </div>
            </div>
        );
}
export default Card;