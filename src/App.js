import './styles/main.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { Fragment, useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';



function App() {
    const [nombre, guardarNombre]= useState('');
    const [email, guardarEmail]= useState('');
    
  return (
    <Fragment>
      <Header/>
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
