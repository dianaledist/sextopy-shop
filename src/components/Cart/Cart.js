import React, {useEffect, useState, useContext}  from 'react';
import './Cart.scss';
import { Link } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Store} from '../../store';
import CartTable from './CartTable/CartTable';

const CartContainer = () => {
  
    const [data, setData]= useContext(Store);
    const [contador, setContador]= useState(1);
    const [prods, setProds]= useState([]);

    const getProductos = new Promise ((resolve,reject)=>{
      setTimeout(() => {
        resolve(data);
      }, 1000)
    })

    useEffect(() => {
        if(data.items.length){
            const productos=JSON.stringify([data.items, data.cantidad, data.precioTotal]);
            localStorage.setItem('productos', productos);
        }

        if(localStorage.getItem('productos')) {
            setProds(JSON.parse(localStorage.getItem('productos')));
        } else {
            setProds(data.items);
        }
  
      }, [data.items])


    return ( 
    <>
    <div className="container pt-3 pb-3">
        <h2 className="Shrikhand text-center ">Tu carrito Sextopy</h2>
    </div>
    <div className="card-producto container animate__animated animate__zoomIn p-5 mb-5" >
    <Link to="/" className="links"><ArrowBackIcon /></Link>
        <h2 className="Bellota-text text-center pb-3">Resumen de compra</h2>
        <table className="mx-auto" cellpadding="10" key={data.items.id}>

            <thead>
            {
                data.items.length ?
                data.items.map((item,index)=>
                <>
                <CartTable 
                    items={data.items} 
                    item={item}
                    key={item.id} 
                    id={item.id} 
                    url={item.url} 
                    nombre={item.nombre} 
                    precio={item.precio} 
                    cantidad={item.quantity}
                />
                
                
                </>
                )
                :
                <>
                <th><p className="loading ">Tu cesta está vacía 💜 </p></th>
                </>                      
            }
          
            </thead>
        </table>
        <h2 className="text-right">Total: $ {data.precioTotal } </h2>
        <div className="text-right">
 
        <Link to={`/checkout`} className="links"><button 
        disabled={data.items.length ? null : 'disabled' } 
        className="btn boton-compra text-white btn-lg text-uppercase mt-3">FINALIZAR COMPRA</button></Link>

        </div>
    </div>
    </>
    );
}
 
export default CartContainer;