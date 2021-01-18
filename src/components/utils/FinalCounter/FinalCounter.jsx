import React, {useState, useContext} from 'react';
/* import './contador.scss'; */
import {Store} from '../../../store';

const FinalCounter = ({items, contador,setContador,cantidad,id, stock, precioProducto}) => {
    const [qty, setQty] =useState(contador);

    const [data, setData]=useContext(Store);   

/*     items.quantity=cantidad+=contador; */
    const restarProducto = () => {
        items.quantity= items.quantity-1;
        if(qty>0) {
            
            setQty(qty - 1);
            setData({ 
                ...data, 
                cantidad: data.cantidad-1,
                precioTotal: data.precioTotal - precioProducto
            });
        }  
        console.log(data.precioTotal)
    }
  

    function sumarProducto(){
        items.quantity= items.quantity+=1;
        if(qty<stock) {
            setQty(qty+1)
            setData({ 
                ...data, 
                cantidad: data.cantidad+1,
                precioTotal: data.precioTotal + precioProducto
            });
        }
    }
/* 
    function restarProducto(){
        if(contador>0) {
        setContador(contador-1)
        }
    }
    console.log({contador,id}); */

    return (
        <>
            <button 
            disabled={qty===1 ? 'disabled' : null } 
            className="btn color-primario text-white Bellota-text-bold boton-contador resta"  
            onClick={ () => restarProducto()}>-</button>
            <input type="number" className="btn btn-light boton" min="1" value={qty} onChange={()=> "defaultValue"}/>
            <button className="btn color-primario text-white boton-contador" onClick={ () => sumarProducto()}>+</button>
        </>

      );
}
 
export default FinalCounter;