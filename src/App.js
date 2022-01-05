import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home/Home';
import Nosotros from './components/Nosotros/Nosotros';
import Servicios from './components/Servicios/Servicios';
import Productos from './components/Productos/ItemListContainer/ItemListContainer.jsx'
import Galeria from './components/Galeria/GaleriaListContainer/GaleriaListContainer';
import Contacto from './components/Contacto/Contacto';
import ItemDetailContainer from './components/Productos/ItemDetailContainer/ItemDetailContainer';
import CartContextProvider from './context/CartContext'
import ItemCartContext from './components/CarritoCompras/ItemCartContext/ItemCartContext';
import TerminarCompra from './components/CarritoCompras/TerminarCompra/TerminarCompra';
import Footer from './components/Footer/Footer';
import Display404 from './components/404/Display404';
import FormularioCompra from './components/CarritoCompras/FormularioCompra/FormularioCompra.jsx'

function App() {
  return (

    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element= { <Home/> } />
          <Route exact path='/nosotros' element= { <Nosotros/> } />
          <Route exact path='/servicios' element= { <Servicios/> } />
          <Route exact path='/productos/:categoriaId' element= { <Productos/> } />
          <Route exact path='/detalle/:id' element= { <ItemDetailContainer/> } />
          <Route exact path='/galeria' element= { <Galeria/> } />
          <Route exact path='/contacto' element= { <Contacto/> } />
          <Route exact path='/cart' element= { <ItemCartContext/> } />
          <Route exact path='/terminarCompra' element= { <TerminarCompra/> } />
          <Route exact path='/formularioCompra' element= { <FormularioCompra/> } />            
          <Route exact path='/display404' element= { <Display404/> } />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartContextProvider>

  );
}

export default App;

