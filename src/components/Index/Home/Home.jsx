import React from 'react';
import SectionCards from '../../Index/SectionCards/SectionCards';
import './Home.scss';

import { Fragment, useState, useEffect } from 'react';
import productosDB from "../../../database/db";


const Home = ({carritoCompra, setCarritoCompra}) => {

    const [productos, setProductos] =useState([]);

 /*     console.log(JSON.stringify(productos)); */

  const getProductos = new Promise ((resolve,reject)=>{
    setTimeout(() => {
      resolve(productosDB);
    }, 2000)
  })

/*     getProductos
    .then(rta=>setProductos(rta))
    .catch(error=>console.log(error)); */

  useEffect(() => {
    getProductos.then(rta=>setProductos(rta))
  }, [])

    return ( 
        <Fragment>
        <h1 className="Shrikhand text-center p-5">Disfrutá tu cuerpo con estas propuestas 🖤 </h1>
        <div className="container">
          <div className="mt-4 row d-flex justify-content-center">
          {
            productos.length ?
            <>
            {productos.map(producto => (
              <SectionCards 
           /*    productos={productos} */
              key={producto.id}
              producto={producto} 
              carritoCompra={carritoCompra}
              setCarritoCompra={setCarritoCompra}
              />        
            ))} 
            </> :
            <p className="loading pb-5">Cargando los productos de Sextopy 💜 </p>
          }
                  
          </div>
        </div>
        </Fragment>
     );
}
 
export default Home;