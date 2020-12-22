import './styles/main.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { Fragment, useState } from 'react';
import Formulario from './components/General/Formulario/Formulario';

import HomeCarrousel from './components/HomeCarrousel/HomeCarrousel';
import Nav from './components/General/Nav/Nav';
import Home from './components/Index/Home/Home';
import Footer from './components/General/Footer/Footer';
import ItemDetailContainer from './components/Products/ItemDetailContainer/ItemDetailContainer';
   

function App() {
    const [nombre, guardarNombre]= useState('');
    const [email, guardarEmail]= useState('');

    //State para un carrito de compras
    const [carritoCompra, setCarritoCompra] = useState ([]);
    const fecha= new Date().getFullYear();

    const sectionToShow = (section) => {
      switch(section) {
        case 'Home': return <Home carritoCompra={carritoCompra}
                                  setCarritoCompra={setCarritoCompra}/>;
        case 'Products': return <ItemDetailContainer  />;
        default: return <Home />
      }
    }
    
  return (
    <Fragment>
      <Nav
      carritoCompra={carritoCompra}
      setCarritoCompra={setCarritoCompra}
      />
    
      <HomeCarrousel/>

      {sectionToShow('Products')}

      <Formulario 
      nombre={nombre}
      guardarNombre={guardarNombre}
      email={email}
      guardarEmail={guardarEmail}
      />
      <Footer
            fecha={fecha}
            titulo='Made with 🖤 by Diana Leonor Di Stefano @ disatechgo &copy;'
      />

    </Fragment>
    
  );
}

export default App;
