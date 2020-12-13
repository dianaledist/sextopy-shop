import './styles/main.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { Fragment, useState } from 'react';
import Formulario from './components/Formulario/Formulario';
/* import SectionCards from './components/SectionCards/SectionCards'; */
import HomeCarrousel from './components/HomeCarrousel/HomeCarrousel';
import Drawer from './components/Drawer/Drawer';
import Home from './components/Home/Home';

/* import {productos} from './database/db'; */

/* import productxmas1 from "./assets/images/productxmas1.jpg";
import productxmas2 from "./assets/images/productxmas2.jpg";
import productxmas3 from "./assets/images/productxmas3.jpg";
 */

function App() {
    const [nombre, guardarNombre]= useState('');
    const [email, guardarEmail]= useState('');

    const [carritoCompra, setCarritoCompra] = useState ([]);
    
  return (
    <Fragment>
      <Drawer
      />
    
      <HomeCarrousel/>
      <Home/>

      <Formulario 
      nombre={nombre}
      guardarNombre={guardarNombre}
      email={email}
      guardarEmail={guardarEmail}
      />

    </Fragment>
    
  );
}

export default App;
