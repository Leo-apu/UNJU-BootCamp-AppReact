import React from "react";
import "./card.css";

export default class Card extends React.Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <div className="card">
                <div>
                    <img src={this.props.images}></img>
                </div>
                <div className="name">{this.props.name}</div>
            </div>
        );
    }
}