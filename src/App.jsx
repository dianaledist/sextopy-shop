import './styles/main.scss';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Formulario from './components/General/Formulario/Formulario';
import HomeCarrousel from './components/HomeCarrousel/HomeCarrousel';
import Nav from './components/General/Nav/Nav';
import Home from './components/Index/Home/Home';
import Footer from './components/General/Footer/Footer';
import Error404 from './components/General/Error404/index';
import Category from './components/General/Category/Category';
import ItemDetailContainer from './components/Products/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/Cart/Cart';
import {Store} from './store';


function App() {
    const [nombre, guardarNombre]= useState('');
    const [email, guardarEmail]= useState('');

    //State para un carrito de compras
    const [data, setData] =useState({
      items: [],
      itemsQuantity: [],
      cantidad: 0
    })   

    const fecha= new Date().getFullYear();
    
  return (
  <Store.Provider value={[data, setData]}>
    <BrowserRouter>
      <Nav/>
    
      <HomeCarrousel/>

      <Switch>
        <Route exact path="/">        
          <Home/>
        </Route>
        <Route path="/cart">
          <CartContainer/>
        </Route>
        <Route path="/detail/:id?">
          <ItemDetailContainer/>
        </Route>
        <Route exact path="/category/:category_name">
          <Category/>
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
  </Store.Provider>  
  );
}

export default App;
