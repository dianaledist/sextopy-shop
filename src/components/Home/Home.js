import React from 'react';
import SectionCards from '../SectionCards/SectionCards';

/* import productxmas1 from "../../assets/images/productxmas1.jpg";
import productxmas2 from "../../assets/images/productxmas2.jpg";
import productxmas3 from "../../assets/images/productxmas3.jpg"; */
import { Fragment, useState } from 'react';
import productosDB from "../../database/db";


const Home = () => {

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
                    />        
                  ))}
            </div>
          </div>
          </Fragment>
     );
}
 
export default Home;