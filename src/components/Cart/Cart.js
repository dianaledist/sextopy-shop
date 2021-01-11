import React, {useEffect, useState, useContext}  from 'react';
import './Cart.scss';
/* import productosDB from "../../database/db.json"; */
import Contador from '../utils/Contador';
import { Link } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import spinner from "../../assets/images/spinner.gif";
import {Store} from '../../store';
import CartTable from './CartTable/CartTable';



const CartContainer = () => {
  
    const [data, setData]= useContext(Store);
    const [productos, setProductos] =useState([]);
    const [contador, setContador]= useState(1);

    const getProductos = new Promise ((resolve,reject)=>{
      setTimeout(() => {
        resolve(data);
      }, 1000)
    })
    useEffect(() => {
      getProductos.then(rta=>setProductos(rta));

    }, [])

    console.log(productos)
    console.log(productos.itemsQuantity)

    function onRemove(){
        console.log('hola');
        console.log(data.items[0]);
    }
/*     const onRemove = () => {	
        console.log('hola');
    }
 */
    return ( 
    <>
    <div className="container pt-3 pb-3">
        <h2 className="Shrikhand text-center ">Tu carrito de compras</h2>
    </div>
    <div className="card-producto container animate__animated animate__zoomIn p-5 mb-5" >
    <Link to="/" className="links"><ArrowBackIcon /></Link>
        <table className="mx-auto" key={data.items.id}>

            <thead>
            {
                data.items.length ?
                data.items.map((items,index)=>
                <>
                <CartTable key={items.id} id={items.id} url={items.url} nombre={items.nombre} precio={items.precio}/>
                
                </>
                )
                :
                <>
                <th><p className="loading ">Tu cesta está vacía 💜 </p></th>
{/*                 <img src={spinner} alt="loading"/> */}
                </>
            
            }
                
            </thead>
        </table>
            
    </div>
    </>
    );
}
 
export default CartContainer;