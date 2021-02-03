import React, { Fragment, useState, useEffect, useContext }  from 'react';
import { useParams, Link } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import {Store} from '../../../store/index';
import './ItemDetailContainer.scss';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {getFirestore} from '../../../database/index';


const ItemListContainer = ({producto, key, idproducto}) => {

    const [item, setItem] =useState([]);
    const [data, setData]= useContext(Store);
    const { id } = useParams();

    const db = getFirestore();


    useEffect(() => {
      if(id) {
        db.collection('productos').doc(id).get()

      .then(doc => {
          if(doc.exists) {
              setItem(doc.data());
          }
      })
      .catch(e => console.log(e));
      }
      

  }, []);


    return (
        <Fragment>
        <div className="container-fluid p-3"><p className="d-flex Bellota-text"><Link to = {"/"} className="px-1">Home</Link> {" > "} <Link to={`/category/${item.categoria}`} className="category_title px-1"> <p className="d-block">{item.categoria}</p></Link> {" > "} <span className="px-1">  {item.nombre}</span></p></div>
        

        <h1 className="Shrikhand text-center pb-3">Detalles del producto </h1>
                        
        <div className="container">
          <div className="mt-4 row d-flex d-flex justify-content-center align-items-center Bellota-text">
            {
              item ?
              <>
                <ItemDetail
                key={item.id}
                item={item} 
                id={item.id}                
                url={item.url}
                nombre={item.nombre}
                descripcion={item.descripcion}
                cttas={item.cttas}
                precio={item.precio}
                stock={item.stock}
                cantidad={item.cantidad}
                categoria={item.categoria}
                />
              </> :
              <>
              <Link to="/" className="links pr-5 mb-5"><ArrowBackIcon /></Link>
              <p className="loading mb-5">¿Estás buscando el producto correcto? 💜 </p>

              </>
            }
          </div>
        </div>
        </Fragment>
      );
}
 
export default ItemListContainer;