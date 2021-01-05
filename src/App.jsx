import './styles/main.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Formulario from './components/General/Formulario/Formulario';
import HomeCarrousel from './components/HomeCarrousel/HomeCarrousel';
import Nav from './components/General/Nav/Nav';
import Home from './components/Index/Home/Home';
import Footer from './components/General/Footer/Footer';
import Error404 from './components/General/Error404/index';
import Category from './components/General/Category/Category';
/* import Detail from './components/General/Detail/Detail'; */
import ItemDetailContainer from './components/Products/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/Cart/Cart';
   

function App() {
    const [nombre, guardarNombre]= useState('');
    const [email, guardarEmail]= useState('');

    //State para un carrito de compras
    const [carritoCompra, setCarritoCompra] = useState ([]);
    const fecha= new Date().getFullYear();
    
  return (
    <BrowserRouter>
      <Nav
      carritoCompra={carritoCompra}
      setCarritoCompra={setCarritoCompra}
      />
    
      <HomeCarrousel/>

      <Switch>
        <Route exact path="/">
        <h1 className="Shrikhand text-center p-5">Disfrutá tu cuerpo con estas propuestas 🖤 </h1>
        <h2 className="Shrikhand text-center p-2">Productos recomendados</h2>
          <Home
          carritoCompra={carritoCompra}
          setCarritoCompra={setCarritoCompra}
          />
        </Route>
        <Route path="/detail/:id?">
          <ItemDetailContainer/>
        </Route>
        <Route path="/category/:category_name">
          <Category/>
        </Route>
        <Route path="/cart">
          <CartContainer/>
        </Route>
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>

      <Formulario 
      nombre={nombre}
      guardarNombre={guardarNombre}
      email={email}
      guardarEmail={guardarEmail}
      />
      <Footer
            fecha={fecha}
      />
    </BrowserRouter>
    
  );
}

export default App;
