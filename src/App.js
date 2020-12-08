import './styles/main.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { Fragment, useState } from 'react';
import Nav from './components/Nav/Nav';
import Formulario from './components/Formulario/Formulario';
import SectionCards from './components/SectionCards/SectionCards';
import HomeCarrousel from './components/HomeCarrousel/HomeCarrousel';
import Drawer from './components/Drawer/Drawer';

import productxmas1 from "./assets/images/productxmas1.jpg";
import productxmas2 from "./assets/images/productxmas2.jpg";
import productxmas3 from "./assets/images/productxmas3.jpg";


function App() {
    const [nombre, guardarNombre]= useState('');
    const [email, guardarEmail]= useState('');

    const [productos, setProductos] =useState([
      { id: 1, nombre: 'Tanga xmas', url:productxmas1, descripcion:'El regalo más original para empezar el año con la mejor suerte', precio: 50},
      { id: 2, nombre: 'Conjunto ho ho ho!', url:productxmas2,  descripcion:'Cuerpos divinos divinos para preparanos post-cena', precio: 40},
      { id: 3, nombre: 'Calzón navideño', url:productxmas3, descripcion:'Una manera diferente para tu visita de Papá Noel', precio: 60},
    ]);
  
    
  return (
    <Fragment>
      <Drawer/>
      
     {/*  <Nav/> */}
     <div className="containter-fluid">
      <HomeCarrousel/>
      </div>
      <h1 className="Shrikhand text-center p-5">Disfrutá tu cuerpo con estas propuestas 🖤 </h1>
      <div className="container ">
        <div className="mt-4 row d-flex justify-content-center">
   
                {productos.map(producto => (
                  <SectionCards 
                  productos={productos}
                  key={producto.id}
                  producto={producto} 
                  />        
                ))}
          </div>
        </div>

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
