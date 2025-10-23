import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/header/header';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

function App() {
  //Array provisorio
  

  const arrayProducto = [
    {id: 1, nombre: "Remera", precio: 20000, descripcion:"Remera de algodon"},
    {id: 2, nombre: "Pantalon", precio: 90000, descripcion:"Pantalon de jean"},
    {id: 3, nombre: "Zapatillas", precio: 110000, descripcion:"Zapatillas deportivas"},
  ]
  //const prod = { nombre: "remera", precio: 10000, descripcion:"LALALA"};

  return (
    <>
    <BrowserRouter>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<ItemListContainer titulo={"Bienvenidos a gamespot"} />}/>
          <Route path="/detail/:id" element={<ItemDetailContainer/>}/>
        </Routes>
        <Footer/>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App
