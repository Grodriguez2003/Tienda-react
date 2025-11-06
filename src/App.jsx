import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/header/header';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { CartProvider } from "./context/CartContext/CartProvider";
import { Cart } from "./components/Cart/Cart";


function App() {

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <div>
          <Header />
          <Routes>
            <Route path="/" element={<ItemListContainer titulo={"Bienvenidos a gamespot"} />} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="/carrito" element={<Cart/>}/>
          </Routes>
          <Footer />
          </div>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
