import React, {useState, useContext} from 'react';
import './contador.scss';
import {Store} from '../../store/index';

const Contador = ({contador,setContador,id,stock}) => {

    const [data, setData]=useContext(Store);    

    const restarProducto = () => {
        if(contador>0) {

            setContador(contador - 1);
        }
    }

    function sumarProducto(){
        if(contador<stock) {
        setContador(contador+1)
        }
    }


    return (
        <>
            <button 
            disabled={contador===1 ? 'disabled' : null } 
            className="btn color-primario text-white Bellota-text-bold boton-contador resta"  
            onClick={ () => restarProducto()}>-</button>
            <input type="number" className="btn btn-light boton" value={contador} onChange={()=> "defaultValue"}/>
            <button className="btn color-primario text-white boton-contador" onClick={ () => sumarProducto()}>+</button>
        </>

      );
}
 
export default Contador;