import React, { Fragment, useState, useEffect }  from 'react';
/* import productosDB from "../../../database/db";
 */import ItemDetail from "../ItemDetail/ItemDetail";
/* import productxmas1 from "../../../assets/images/productxmas1.jpg"; */
import productosDB from "../../../database/db.json";

const ItemListContainer = ({producto, key}) => {

    const [productos, setProductos] =useState([]);

    const getProductos = new Promise ((resolve,reject)=>{
        setTimeout(() => {
          var item = productosDB.filter(prod=>prod.id===1); 
            resolve(item);
 /*          resolve(productosDB); */
        }, 500)
      })

      useEffect(() => {
        getProductos.then(rta=>setProductos(rta))
      }, [])

      console.log(producto);

    return (
        <Fragment>
        <h1 className="Shrikhand text-center p-5">Detalles del producto </h1>
        <div className="container">
          <div className="mt-4 row d-flex justify-content-center Bellota-text">
          {
            productos.length ?
            <>
            {productos.map(producto => (
              <ItemDetail

              key={producto.id}
              producto={producto} 
              />        
            ))} 
            </> :
            <p className="loading pb-5">Cargando información 💜 </p>
          }
                  
          </div>
        </div>
        </Fragment>
      );
}
 
export default ItemListContainer;