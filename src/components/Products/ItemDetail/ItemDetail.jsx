import React, {useState, useContext} from 'react';
import './ItemDetail.scss';
import Contador from '../../utils/Contador';
import Comments from '../Comments/Comments';
import Swal from 'sweetalert2';
import {Store} from '../../../store';


const ItemDetail = ({item, id, url, nombre, descripcion, cttas, precio, stock}) => {

    const [data, setData]= useContext(Store);

    const [contador, setContador]= useState(1);

    const setAlert = (e)=> {
        Swal.fire({
            title: `Has agregado ${contador} items al carrito. Stock disponible: ${item.stock}`,
            icon: 'success',
            width: 600,
            padding: '3em',
          })
    }

    const onAdd = (id) => {	

        let existingProduct=data.items.find((prod) => prod.id == id);
        console.log(existingProduct)

        console.log(data.items);
        console.log(data.cantidad);    
        
        if (existingProduct) {
            
            if(contador>stock) {
                let timerInterval
                Swal.fire({
                title: `Lo sentimos. Stock disponible: ${existingProduct.stock}`,
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
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log('I was closed by the timer')
                }
                })
            } else {
               existingProduct.quantity=existingProduct.quantity+=contador;
               console.log(existingProduct.stock)
               existingProduct.stock=existingProduct.stock-=contador;
            setData({     
                items: [...data.items],  
                cantidad: data.cantidad += contador,
                precioTotal: data.precioTotal + (item.precio * contador)
            })
            setAlert()
            }
            console.log(data);
        } else {
            item.quantity=item.quantity+=contador; 
            item.stock=item.stock-item.quantity;
            setData({
                items: [ ...data.items, item ],
                cantidad: data.cantidad += contador,
                precioTotal: data.precioTotal + (item.precio * contador)    
            })
            setAlert()
            console.log(data);
        }
    }
    


    return ( 
        <>
        <div className="container contenedor p-5 mb-5 animate__animated animate__zoomIn" >
            <div className="row text-center align-items-center">
                <div className="col-12 col-md-6">
                    <div className="overlay">
                        <img src={`../../../products/${url}`} alt={nombre} className="img-fluid img-transform"/>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <h2 className="display-4 Bellota-text-bold">{nombre}</h2>
                    <h3>{descripcion}</h3>
                    <p >{cttas} </p>
                    <h3 className="py-3">$ {precio*contador}</h3>
                    <div className="container">
                    <Contador
                    key={id}
                    contador={contador}
                    setContador={setContador}
                    stock={stock}
                    id={id}
                    /></div>
                    <button className="btn color-primario text-white btn-lg text-uppercase mt-3" onClick={ () => onAdd(id)}>Agregar al Carrito</button>
                </div>
            </div>  
        </div>
        <Comments/>
        </>
      );
}
 
export default ItemDetail;