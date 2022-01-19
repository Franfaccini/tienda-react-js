import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import { useState } from 'react';


//function App() {
 // return (
 //   
 //   <div className="App">
 //     <NavBar/>
 //    
 //     <header className="App-header">
 //     <ItemListContainer/>
 //       <img src={logo} className="App-logo" alt="logo" />
 //       
 //       <p>
 //         Mi primera tienda
 //       </p>
 //       
 //       <a
 //         className="App-link"
 //         href="https://reactjs.org"
 //         target="_blank"
 //         rel="noopener noreferrer"
 //       >
//          Coderhouse
//        </a>
 //     </header>
 //     
  //  </div>
  //);
//}



const App = () => {
  const [name, setName] = useState("Eren");
  const [apellido, setApellido] = useState("Eren");
  const [itemsQty, setItemsQty] = useState(0);

const[datos, setDatos]= useState({
  nombre: "bla bla",
  apellido: "asdasd"
});


return(
  <div className='App'>
    <h2>Mi Carrito</h2>
        <div style={{marginBottom : 10}}>
            <button onClick={() => setItemsQty (itemsQty - 1)} variant="primary">-</button>
            <span style={{margin: 10, fontSize: "3rem"}}>{itemsQty}</span>
            <button onClick={() => setItemsQty (itemsQty + 1)} variant="primary">+</button>

        </div>
  </div>
);
}



export default App;
