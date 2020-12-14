import React from 'react';
import SectionCards from '../SectionCards/SectionCards';

import { Fragment, useState } from 'react';
import productosDB from "../../database/db";


const Home = ({carritoCompra, setCarritoCompra}) => {

    const [productos, setProductos] =useState([productosDB]);

 /*     console.log(JSON.stringify(productos)); */

    return ( 
        <Fragment>
        <h1 className="Shrikhand text-center p-5">Disfrutá tu cuerpo con estas propuestas 🖤 </h1>
        <div className="container ">
          <div className="mt-4 row d-flex justify-content-center">
     
                  {productosDB.map(producto => (
                    <SectionCards 
                    productos={productos}
                    key={producto.id}
                    producto={producto} 
                    carritoCompra={carritoCompra}
                    setCarritoCompra={setCarritoCompra}
                    />        
                  ))}
            </div>
          </div>
          </Fragment>
     );
}
 
export default Home;