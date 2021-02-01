import './styles/main.scss';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect } from 'react';
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
import Checkout from './components/Checkout/Checkout';
import {Store} from './store';


function App() {
    const [nombre, guardarNombre]= useState('');
    const [email, guardarEmail]= useState('');

    //State para un carrito de compras
    const [data, setData] =useState({
      items: [],
      cantidad: 0,
      precioTotal:0 
    })   


  let carritoInicial= JSON.parse(localStorage.getItem('productos'));

  const [productsLS, setProductsLS] = useState(carritoInicial);

  useEffect(() => {
      if (!productsLS) {
        carritoInicial = [[],0,0];
        console.log(carritoInicial)
        setData(data);

      } else  {
        setData({     
          items: [...productsLS[0]],  
          cantidad: productsLS[1],
          precioTotal: productsLS[2]
      });
      }
    }, [productsLS]);

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
        <Route path="/checkout">
          <Checkout/>
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
