
import './App.css';
import NavBar from './component/navBar/navBar';
import Home from './component/home/home';
import About from './component/about/about';
import CharDetail from './component/characterDetail/chardetail';
import CharDetailId from './component/characterDetail/chardetailid';
import datos from '../src/datos/datos.json'
import { useEffect } from 'react';
import {Switch,Route,BrowserRouter as Router} from 'react-router-dom';

function App() {
  useEffect( ()=> {
    console.log("Funcionando")
  },[])
  return (
    <Router>
    <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path="/home">
              <Home character={datos['Character ']}></Home>
          </Route>
          <Route exact path="/characterDetail">
              <CharDetail character={datos['Character ']}></CharDetail>
          </Route>
          <Route exact path="/characterDetailId/:id">
              <CharDetailId character={datos['Character ']}></CharDetailId>
          </Route>
          <Route exact path="/about">
              <About></About>
          </Route>
          <Route>
              <h3>ERROR 404 - PAGINA NO ECONTRADA</h3>
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
