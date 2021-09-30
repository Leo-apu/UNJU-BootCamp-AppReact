import React from "react";
import { useParams,useHistory,useLocation } from "react-router";
import datos from "../../datos/datos.json"

export default function CharDetailId (){
    const parametro = useParams();
    const history = useHistory();
    const location = useLocation();
     console.log(location)
    const change = () => {
        history.push("/home")
    }
    var Current = datos["Character "].find((element) => element.id === parametro.id)
    return(
        <div className="all">
                <div className="container">
                    <h1>
                        {Current.name + " "+ Current.lastname}
                    </h1>
                </div>
                <div><img img src={Current.images} alt ="imagen"></img></div>
                <div>
                    <h2>Character Details</h2>
                    <h3>Elemento : {Current.elemento}</h3>
                    <h3>Habilidad : {Current.Habilidad}</h3>
                    <h3>Edad : {Current.age + " años"}</h3>
                    <h3>Clan : {Current.clan}</h3>
                </div>
                <button onClick={change}> Return Home </button>
            </div>
    )
}