
import './App.css';
import NavBar from './component/navBar/navBar';
import Home from './component/home/home';
import About from './component/about/about';
import CharDetail from './component/characterDetail/chardetail';

function App() {
  return (
    <div>
        <NavBar/>
        <Home/>
        <CharDetail/>
        <About/>
    </div>
  );
}

export default App;
