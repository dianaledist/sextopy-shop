import React, {useState, useContext} from 'react';
/* import './contador.scss'; */
import {Store} from '../../../store';

const FinalCounter = ({items, item, key, contador,setContador,cantidad,id, stock, precio}) => {
    const [qty, setQty] =useState(contador);

    const [data, setData]=useContext(Store);   

/*     items.quantity=cantidad+=contador; */
    const restarProducto = () => {
        
        if(contador>0) {
           item.quantity= item.quantity-=1; 
            setContador(contador - 1);
            setData({ 
                items: [...data.items], 
                cantidad: data.cantidad-1,
                precioTotal: data.precioTotal - precio
            });
            const productos=JSON.stringify(data.items);
            localStorage.setItem('productos', productos);
        }  
        console.log(data.precioTotal)
    }
  

    function sumarProducto(){
        
        if(contador===stock) {
            alert("contador=stock");
        } else if (contador<stock){
            item.quantity= item.quantity+=1;
            setContador(contador+1)

            setData({     
                items: [...data.items],  
                cantidad: data.cantidad +1,
                precioTotal: data.precioTotal + precio
            })
        } else {
            alert("la que queda")
        }

        /* if(contador<stock) {
            setContador(contador+1)

            setData({     
                items: [...data.items],  
                cantidad: data.cantidad +1,
                precioTotal: data.precioTotal + precio
            })

            setData({ 
                ...data, 
                cantidad: data.cantidad+1,
                precioTotal: data.precioTotal + precioProducto
            });

        } else {
            alert("stock")
        } */
        const productos=JSON.stringify(data.items);
        localStorage.setItem('productos', productos);
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
            <input type="number" className="btn btn-light boton" min="1" value={contador} onChange={()=> "defaultValue"}/>
            <button className="btn color-primario text-white boton-contador" onClick={ () => sumarProducto()}>+</button>
        </>

      );
}
 
export default FinalCounter;