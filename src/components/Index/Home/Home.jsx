import React from 'react';
import SectionCards from '../../Index/SectionCards/SectionCards';
import './Home.scss';

import { Fragment, useState, useEffect } from 'react';
/* import productosDB from "../../../database/db"; */
import productosDB from "../../../database/db.json";
import spinner from "../../../assets/images/spinner.gif";


const Home = ({carritoCompra, setCarritoCompra}) => {

    const [productos, setProductos] =useState([]);

    /*  console.log(JSON.stringify(productosDB)); */

  const getProductos = new Promise ((resolve,reject)=>{
    setTimeout(() => {
      true?resolve(productosDB):reject("Error 500");
    }, 1000)
  })

/*     getProductos
    .then(rta=>setProductos(rta))
    .catch(error=>console.log(error)); */

  useEffect(() => {
    getProductos.then(rta=>setProductos(rta))
  }, [])

    return ( 
        <Fragment>
        
        <div className="container">
          <div className="mt-4 row d-flex justify-content-center">
          {
            productos.length ?
            <>
            {productos.map((producto, index) => (
                  <SectionCards 
                  productos={productos}
                  key={index+1}
                  idproducto={producto.id}
                  producto={producto} 
                  carritoCompra={carritoCompra}
                  setCarritoCompra={setCarritoCompra}              
                  /> 
            ))} 
            </> :
            <>
            <p className="loading">Cargando los productos de Sextopy 💜 </p>
            <img src={spinner} alt="loading"/>
            </>

          }
                  
          </div>
        </div>
        </Fragment>
     );
}
 
export default Home;