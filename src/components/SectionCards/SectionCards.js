import React, { Fragment, useState } from 'react';
import './SectionCards.scss';
import Contador from '../utils/Contador';


const SectionCards = ({producto, productos, carritoCompra, setCarritoCompra}) => {

    const {id, url, nombre, descripcion, precio, stock} = producto;

    const [contador, setContador]= useState(1);

    function agregarCarrito() {
        console.log("agregando....");
    }

    return (

        <Fragment>
            
           <div className="col-12 col-lg-4 mb-4">
                 
            <div className="card-producto text-center animate__animated animate__zoomIn">
              
                <img src={url} alt={nombre} className="img-fluid pt-3"/>
                <div className="info-producto text-center p-4 Bellota-text">
                    <h3 className="text-center mb-3 Bellota-text-bold">{nombre}</h3>
                    <p>{descripcion}</p>
                    <p className="precio font-weight-bold">$ {precio}</p>
                    <Contador
                    contador={contador}
                    setContador={setContador}
                    stock={stock}
                    id={id}
                    />
                    <a href="#index" className="btn color-primario text-white btn-lg text-uppercase mt-3" onClick={ () => agregarCarrito(id)}>Agregar al Carrito</a>
                </div>
            </div>
            </div>  
   
        </Fragment>
      );
}
 
export default SectionCards;