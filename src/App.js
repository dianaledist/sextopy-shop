import './styles/main.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { Fragment, useState } from 'react';
import Formulario from './components/Formulario/Formulario';
/* import SectionCards from './components/SectionCards/SectionCards'; */
import HomeCarrousel from './components/HomeCarrousel/HomeCarrousel';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
    const [nombre, guardarNombre]= useState('');
    const [email, guardarEmail]= useState('');

    //State para un carrito de compras
    const [carritoCompra, setCarritoCompra] = useState ([]);
    const fecha= new Date().getFullYear();
    

  return (
    <Fragment>
      <Nav
      carritoCompra={carritoCompra}
      setCarritoCompra={setCarritoCompra}
      />
    
      <HomeCarrousel/>
      <Home
      carritoCompra={carritoCompra}
      setCarritoCompra={setCarritoCompra}
      />

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
