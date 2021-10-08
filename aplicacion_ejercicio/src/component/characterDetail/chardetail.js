import React,{useState} from "react";
import datos from "../../datos/datos.json";
import "./charDetail.css";

const CharDetail = () => {
        const [Perfil, setState] = useState (datos["Character "][0]);
        const onChangeInput = (event) => {
            setState(datos["Character "].find((element)=> element.id === event.target.value))
        };
        return(
            <div className="all">
                <div className="container0">
                <select onChange={(event) => {
                    onChangeInput(event);
                } }> {datos["Character "].map((element) => (
                    <option value={element.id} key={element.id}>
                        {element.name + " " + element.lastname}
                    </option>
                ))}
                </select>
                <div className="container0">
                    <h1>
                        {Perfil.name + " "+ Perfil.lastname}
                    </h1>
                </div>
                <div><img img src={Perfil.images} alt ="imagen"></img></div>
                <div>
                    <h2>Personaje Detalles</h2>
                    <h3>Elemento : {Perfil.elemento}</h3>
                    <h3>Habilidad : {Perfil.Habilidad}</h3>
                    <h3>Edad : {Perfil.age + " años"}</h3>
                    <h3>Clan : {Perfil.clan}</h3>
                </div>
            </div>
            </div>
        );
    }
    export default CharDetail;