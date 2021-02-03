import React from 'react';
import SectionCards from '../../Index/SectionCards/SectionCards';
import './Home.scss';
import { Fragment, useState, useEffect } from 'react';
import spinner from "../../../assets/images/spinner.gif";
import {getFirestore} from '../../../database/index';
import Categoria from './Categoria';
import Formulario from '../../General/Formulario/Formulario';


const Home = () => {

    const [productos, setProductos] =useState([]);
    const [items, setItems]= useState([]);
  

  const db = getFirestore();  

  const getProductsFromDB=()=> {
  db.collection('productos').where("destacado", "==", true).get()

  .then(docs=> {
    let arr=[];
    docs.forEach(doc=>{        
      arr.push({id: doc.id, data: doc.data()})
    }) 
    setItems(arr);
  
   
  })
  .catch(e=>console.log(e))
}

useEffect(()=>{
  getProductsFromDB();
}, []) 



    return ( 
        <Fragment>
        <h1 className="Shrikhand text-center p-5">Disfrutá tu cuerpo con estas propuestas 🖤 </h1>
        <h2 className="Shrikhand text-center p-2">Productos recomendados</h2>
        <div className="container">
          <div className="mt-4 row d-flex justify-content-center">
          {
            items.length ?
            <>
            {items.map((item, index) => (
                  <SectionCards 
                  productos={items}
                  key={item.data.id}
                  idproducto={item.data.id}
                  producto={item.data}          
                  url={item.data.url}
                  nombre={item.data.nombre}
                  descripcion={item.data.descripcion}
                  precio={item.data.precio}
                  stock={item.data.stock}
                  cantidad={item.data.quantity}
                  
                  /> 
            ))} 
            </> :
            <>
            <p className="loading">Cargando los productos de Sextopy 💜 </p>
            <img src={spinner} alt="loading"/>
            </>

          }
          <Categoria/> 
               
          </div>
          
        </div>
        <Formulario/>  
        </Fragment>
     );
}
 
export default Home;