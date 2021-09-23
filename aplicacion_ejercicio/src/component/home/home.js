import React from "react";
import datos from "../../datos/datos.json"
import Card from "../characterDetail/card";
import "./home.css";

export default class Home extends  React.Component{
    render(){
        return(
            <div className="home">
                {datos["Character "].map((element) => (
                    <Card 
                        name = {element.name + " " + element.lastname} images= {element.images} key={element.id}
                    />
                ))}
            </div>
        );
    }
}