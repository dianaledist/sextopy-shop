import React, { Fragment, useState, useEffect }  from 'react';
import { useParams, Link } from "react-router-dom";
import productosDB from "../../../database/db";
import ItemDetail from "../ItemDetail/ItemDetail";

/* import productosDB from "../../../database/db.json"; */
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


const ItemListContainer = ({producto, key, idProducto}) => {

    const [item, setItem] =useState([]);

    const { id } = useParams();

    useEffect(() => {
      setTimeout(() => {
        const promise = new Promise((resolve, reject) => {
          const itemDB = productosDB.find(producto=>producto.id==id)
          resolve(itemDB)

        });
        promise.then((itemDB) => {
          setItem(itemDB);
        });
      }, [id]);
    }, 1000);


    return (
        <Fragment>
        <h1 className="Shrikhand text-center p-5">Detalles del producto </h1>
        <div className="container">
          <div className="mt-4 row d-flex d-flex justify-content-center align-items-center Bellota-text">
            {
              item ?
              <>
                <ItemDetail
              
                key={item.id}
                item={item} 
                url={item.url}
                />
              </> :
              <>
              <Link to="/" className="links pr-5 mb-5"><ArrowBackIcon /></Link>
              <p className="loading mb-5">¿Estás buscando el producto correcto? 💜 </p>

              </>
            }


            
          {/* {
            productos.length ?
            <>
            {productos.map(producto => (
                <>
                <p>El id del producto seleccionado es: {producto.id}</p>
                <ItemDetail
            
                key={producto.id}
                producto={producto} 
                />
                </>
    
            ))} 
            </> :
            <p className="loading pb-5">Cargando información 💜 </p>
          } */}
                  
          </div>
        </div>
        </Fragment>
      );
}
 
export default ItemListContainer;