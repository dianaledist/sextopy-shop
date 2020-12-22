import React, { Fragment, useState, useEffect }  from 'react';
/* import productosDB from "../../../database/db";
 */import ItemDetail from "../ItemDetail/ItemDetail";
import productxmas1 from "../../../assets/images/productxmas1.jpg";

const ItemListContainer = () => {

  const productosDB1 = [
      { id: 1, nombre: 'Tanga xmas', url:productxmas1, descripcion:'El regalo más original para empezar el año con la mejor suerte', cttas: 'Ropa interior hecho 100% de algodón y materia prima ecológica. Calza perfecto en cualquier cuerpx. Varias tallas y colores a disposición.', precio: 50, stock:15},
  ]

    const [productos, setProductos] =useState([]);

    const getProductos = new Promise ((resolve,reject)=>{
        setTimeout(() => {
          resolve(productosDB1);
        }, 2000)
      })

      useEffect(() => {
        getProductos.then(rta=>setProductos(rta))
      }, [])

      console.log(productos);

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