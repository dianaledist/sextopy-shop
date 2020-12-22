import React, {useState} from 'react';
import './ItemDetail.scss';
import Contador from '../../utils/Contador';

const ItemDetail = ({producto}) => {
    const {id, url, nombre, descripcion, cttas, precio, stock} = producto;
    const [contador, setContador]= useState(1);

    function agregarCarrito() {
        console.log("agregando....");
    }

    return ( 
        <div className="container contenedor p-5 mb-5 animate__animated animate__zoomIn">
            <div className="row text-center align-items-center">
                <div className="col-12 col-md-6">
                    <div className="overlay">
                        <img src={url} alt={nombre} className="img-fluid img-transform"/>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <h2 className="display-4 Bellota-text-bold">{nombre}</h2>
                    <h3>{descripcion}</h3>
                    <p >{cttas} </p>
                    <h3 className="py-3">$ {precio*contador}</h3>
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
      );
}
 
export default ItemDetail;