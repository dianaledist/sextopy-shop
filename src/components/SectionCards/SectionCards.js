import React, { Fragment } from 'react';
import './SectionCards.scss';


const SectionCards = ({producto}) => {

    const {id, url, nombre, descripcion, precio} = producto;

    return (

        <Fragment>
           <div className="col-12 col-lg-4 mb-4">
               
            <div className="card-producto text-center">
                <img src={url} alt={nombre} class="img-fluid"/>
                <div class="info-producto color-primario text-light text-center p-4">
                    <h3 class="text-center mb-3">{nombre}</h3>
                    <p>{descripcion}</p>
                    <p class="precio font-weight-bold">$ {precio}</p>
                    <a href="#index" class="btn btn-success d-block btn-lg text-uppercase">Agregar al Carrito</a>
                </div>
            </div>
            </div>  
            
        </Fragment>
      );
}
 
export default SectionCards;