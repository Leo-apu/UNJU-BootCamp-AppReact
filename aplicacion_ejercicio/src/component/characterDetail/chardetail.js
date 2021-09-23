import React from "react";
import datos from "../../datos/datos.json";
import "./charDetail.css";

export default class CharDetail extends React.Component{
    constructor(){
        super();
        this.state = {
            currentElement : datos["Character "][0],
        };
    }
    onChangeInput = (event) => {
        this.setState(() => {
           return {
            currentElement: datos["Character "].find(
                (element) => element.id === event.target.value
            ),
           };
        });
    };
    render (){
        return(
            <div className="all">
                <div className="container">
                <select onChange={(event) => {
                    this.onChangeInput(event);
                } }> {datos["Character "].map((element) => (
                    <option value={element.id} key={element.id}>
                        {element.name + " " + element.lastname}
                    </option>
                ))}
                </select>
                <div className="container">
                    <h1>
                        {this.state.currentElement.name + " "+ this.state.currentElement.lastname}
                    </h1>
                </div>
                <div><img src={this.state.currentElement.images}></img></div>
                <div>
                    <h2>Character Details</h2>
                    <h3>Elemento : {this.state.currentElement.elemento}</h3>
                    <h3>Habilidad : {this.state.currentElement.Habilidad}</h3>
                    <h3>Edad : {this.state.currentElement.age + " años"}</h3>
                    <h3>Clan : {this.state.currentElement.clan}</h3>
                </div>
            </div>
            </div>
           
        );
    }
}