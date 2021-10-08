import React from "react";
import "./about.css";
import { useState } from "react";
import {Form,Row,Col, Container,Button,Card} from 'react-bootstrap'

export function validacion(input){
    let errors = {}
    if(!input.email){
        errors.email = "Email is required"
    } else if(!/\S+@\S+\.\S+/.test(input.email)){
        errors.email = "Email must be a email"
    }
    if(!input.asunto){
        errors.asunto = "Asunto is required"
    } else if(Object.keys(input.asunto).length<10){
        errors.asunto = "Asunto debe escribir mas de 10 caracteres"
    }
    if(!input.mensaje){
        errors.mensaje = "Mensaje is required"
    } else if(Object.keys(input.mensaje).length>256){
        errors.mensaje = "debe escribir menos de 256 caracteres"
    }
    return errors;
}
const About =(props)=> {
    const [state, setState] = useState({
        email: '',
        asunto: '',
        mensaje:''
    });

    const [fails, setFails] = useState({
        email: "",
        asunto: "",
        mensaje:""
    });

    function onSubmitForm(e){
            e.preventDefault();
            alert(`el correo es ${state.email} y el asunto es ${state.asunto}`)
    }

    function onHandleChange(e){
            setState({
                ...state,
                [e.target.name]: e.target.value
            })
            setFails(
                validacion({
                    ...state, 
                    [e.target.name]: e.target.value
                    })
                )
}
    return (
    <Container className="formulario">
        <Row>
            <Col></Col>
            <Col xs={8}>
            
            <div class="container mt-3 ">
            <Card className="col-sm-12" border="danger" style={{ color:"black" ,backgroundColor:"orangered"}}>
                <Card.Header>Universidad Nacional de Jujuy - BOOTCAMP</Card.Header>
                <Card.Body>
                <Card.Title>EJERCICIO REACT</Card.Title>
                <Card.Text>
                    <p class="text-center fw-bold text-dark">LEANDRO VICTORINO CRUZ - BOOTCAMP-REACT</p>
                    <p class="text-center text-italic fw-bold text-dark"> Contacto: leovcruz@gmail.com </p>
                </Card.Text>
                </Card.Body>
            </Card>
            <h3 className="text-center text-dark">FORMULARIO DE CONTACTO</h3>
            <Form onSubmit={(e) => onSubmitForm(e)} >
                <div>
                    <label class="col-sm-2 col-form-label text-dark"> EMAIL </label>
                    <input
                        type="text"
                        class="form-control p-3"
                        name='email'
                        placeholder="Ingrese su Email : aaaa@gmail.com"
                        value={state.email}
                        onChange={(e) => onHandleChange(e)}
                    /> 
                    {fails.email ?
                        <div class="alert alert-danger" role="alert">
                        <p style={{color: 'red'}}> {fails.email}</p> 
                        </div>
                        : <p></p>
                    }
                </div> 
                <div>
                    <label class="col-sm-2 col-form-label text-dark"> ASUNTO </label>
                    <input
                        type="text"
                        class="form-control"
                        name='asunto'
                        placeholder="Ingrese Asunto : minimo 10 caracteres"
                        value={state.asunto}
                        onChange={(e) => onHandleChange(e)}
                    /> 
                    {fails.asunto && 
                    <div class="alert alert-danger" role="alert">
                    <p style={{color: 'red'}}> {fails.asunto} </p>
                    </div>
                    }
                </div> 
                <div>
                    <label class="col-sm-2 col-form-label mt-3 text-dark"> MENSAJE </label>
                    <textarea
                        type="text"
                        class="form-control p-3 mb-3"
                        name='mensaje'
                        placeholder="Ingrese su Mensaje : Maximo de 256 palabras"
                        value={state.mensaje}
                        onChange={(e) => onHandleChange(e)}
                    /> 
                    {fails.mensaje && 
                    <div class="alert alert-danger" role="alert">
                    <p style={{color: 'red'}}> {fails.mensaje} </p>
                    </div>
                    }
                </div>
                <div className="d-grid">
                    <Button  type="submit" className="btn btn-danger" disabled={ fails.email || fails.asunto|| fails.mensaje || state.email === "" || state.asunto === "" || state.mensaje === ""  ? true : false  }>
                    Enviar
                    </Button>
                </div>
            </Form>     
                </div>
                </Col>
                <Col></Col>
        </Row>
    </Container>
    );
}

export default About ;



/*export default class About extends React.Component{
    render(){
        return(
            <footer className="about">
                <h2>Bootcamp</h2>
                <h4>Cruz Leandro Victorino<p>Correo: 34524268@fi.unju.edu.ar </p></h4>
                <h4>Ejercitacion-React</h4>
            </footer>
        );
    }
}*/