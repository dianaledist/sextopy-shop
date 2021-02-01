import React, {useState, useContext} from 'react';
import './FinalCounter.scss';
import {Store} from '../../../store';
import Swal from 'sweetalert2';

const FinalCounter = ({items, item, key, contador,setContador,cantidad,id, stock, precio}) => {
    const [qty, setQty] =useState(contador);

    const [data, setData]=useContext(Store);   

    const restarProducto = () => {
        
        if(contador>0) {
           item.quantity= item.quantity-=1; 
           item.stock= item.stock+=1; 
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
        
        if(stock===0){
            let timerInterval
                Swal.fire({
                title: 'Lo sentimos, no hay más stock de este producto',
                html: 'La ventana se cierra en <b></b> milisegundos',
                timer: 1000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                    timerInterval = setInterval(() => {
                    const content = Swal.getContent()
                    if (content) {
                        const b = content.querySelector('b')
                        if (b) {
                        b.textContent = Swal.getTimerLeft()
                        }
                    }
                    }, 100)
                },
                willClose: () => {
                    clearInterval(timerInterval)
                }
                }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log('I was closed by the timer')
                }
                })
        } else {
            item.quantity= item.quantity+=1;
            item.stock= item.stock-=1; 
            setContador(contador+1)

            setData({     
                items: [...data.items],  
                cantidad: data.cantidad +1,
                precioTotal: data.precioTotal + precio
            })
        }
        const productos=JSON.stringify(data.items);
        localStorage.setItem('productos', productos);
    }

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