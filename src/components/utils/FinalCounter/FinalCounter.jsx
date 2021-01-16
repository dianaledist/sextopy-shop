import React, {useState, useContext} from 'react';
/* import './contador.scss'; */
import {Store} from '../../../store';

const FinalCounter = ({contador,setContador,cantidad,id,stock}) => {
    const [qty, setQty] =useState(cantidad)

    const [data, setData]=useContext(Store);   

    const restarProducto = () => {
        if(qty>0) {
            setQty(qty - 1);
        }
    }

    function sumarProducto(){
        if(qty<stock) {
        setQty(qty+1)
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
            disabled={contador===1 ? 'disabled' : null } 
            className="btn color-primario text-white Bellota-text-bold boton-contador resta"  
            onClick={ () => restarProducto()}>-</button>
            <input type="number" className="btn btn-light boton" value={qty} onChange={()=> "defaultValue"}/>
            <button className="btn color-primario text-white boton-contador" onClick={ () => sumarProducto()}>+</button>
        </>

      );
}
 
export default FinalCounter;