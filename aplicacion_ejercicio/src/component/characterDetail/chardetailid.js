import React from "react";
import { useParams,useHistory,useLocation } from "react-router";
import datos from "../../datos/datos.json";
import "./charDetailId.css";

export default function CharDetailId (){
    const parametro = useParams();
    const history = useHistory();
    const location = useLocation();
     console.log(location)
    const change = () => {
        history.push("/")
    }
    var Current = datos["Character "].find((element) => element.id === parametro.id)
    return(
        <div className="all">
                <div className="container1">
                    <h1>
                        {Current.name + " "+ Current.lastname}
                    </h1>
                </div>
                <div><img img src={Current.images} alt ="imagen"></img></div>
                <div >
                    <h2>Personaje Detalles</h2>
                    <h3>Elemento : {Current.elemento}</h3>
                    <h3>Habilidad : {Current.Habilidad}</h3>
                    <h3>Edad : {Current.age + " años"}</h3>
                    <h3>Clan : {Current.clan}</h3>
                </div>
                <button className="button" onClick={change}> VOLVER </button>
            </div>
    )
}