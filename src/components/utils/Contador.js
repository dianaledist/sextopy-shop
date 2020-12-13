import React from 'react';
import './contador.scss';

const Contador = ({contador,setContador,stock}) => {

    function sumarProducto(){
        if(contador<stock) {
        setContador(contador+1)
        }
    }

    function restarProducto(){
        if(contador>0) {
        setContador(contador-1)
        }
    }

    return (
        <div className="container">
            <button className="btn color-primario text-white Bellota-text-bold boton-contador"  onClick={ () => restarProducto()}>-</button>
            <input type="number" className="btn btn-light" value={contador} />
            <button className="btn color-primario text-white boton-contador" onClick={ () => sumarProducto()}>+</button>

        </div>
      );
}
 
export default Contador;