import React from 'react';
import SectionCards from '../../Index/SectionCards/SectionCards';
import './Home.scss';

import { Fragment, useState, useEffect } from 'react';
import productosDB from "../../../database/db";
/* import productosDB from "../../../database/db.json"; */
import spinner from "../../../assets/images/spinner.gif";


const Home = ({carritoCompra, setCarritoCompra}) => {

    const [productos, setProductos] =useState([]);
    const [itemCarrito, setItemCarrito] = useState({});


    /*  console.log(JSON.stringify(productosDB)); */

  const getProductos = new Promise ((resolve,reject)=>{
    const productos_destacados = productosDB.filter(item=> {
      return item.destacado===true

    })
    setTimeout(() => {      
      true?resolve(productos_destacados):reject("Error 500");

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
        <h1 className="Shrikhand text-center p-5">Disfrutá tu cuerpo con estas propuestas 🖤 </h1>
        <h2 className="Shrikhand text-center p-2">Productos recomendados</h2>
        <div className="container">
          <div className="mt-4 row d-flex justify-content-center">
          {
            productos.length ?
            <>
            {productos.map((producto, index) => (
                  <SectionCards 
                  productos={productos}
                  key={producto.id}
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