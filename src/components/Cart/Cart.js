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
    /* const [productos, setProductos] =useState([]); */
    const [contador, setContador]= useState(1);
    const [prods, setProds]= useState([]);

    const getProductos = new Promise ((resolve,reject)=>{
      setTimeout(() => {
        resolve(data);
      }, 1000)
    })

    useEffect(() => {
        if(data.items.length){
            const productos=JSON.stringify(data.items);
            localStorage.setItem('productos', productos);
        }

        if(localStorage.getItem('productos')) {
            console.log(JSON.parse(localStorage.getItem('productos')))
            setProds(JSON.parse(localStorage.getItem('productos')));
        } else {
            setProds(data.items);
        }
  
      }, [data.items])


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
                <CartTable 
                    items={items} 
                    key={items.id} 
                    id={items.id} 
                    url={items.url} 
                    nombre={items.nombre} 
                    precio={items.precio} 
                    cantidad={items.quantity}
                />
                
                
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
        <h2 className="text-right">Total: € {data.precioTotal } </h2>
        <div className="text-right">
        <button className="btn boton-compra text-white btn-lg text-uppercase mt-3" /* onClick={ () => onAdd(id)} */>FINALIZAR COMPRA</button>
        </div>
    </div>
    </>
    );
}
 
export default CartContainer;