import React, {useState, useContext} from 'react';
import './ItemDetail.scss';
import Contador from '../../utils/Contador';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Link, Redirect} from 'react-router-dom';
import Comments from '../Comments/Comments';
import Swal from 'sweetalert2';
import {Store} from '../../../store';


const ItemDetail = ({item, cantidad}) => {
    const {id, url, nombre, descripcion, cttas, precio, stock} = item;
    const [data, setData]= useContext(Store);

    const [contador, setContador]= useState(1);
    const [redirect, setRedirect] = useState(false);
    const [confirmMessage, setConfirmMessage] = useState("")


    const onAdd = () => {	

        const existingProduct=data.items.find((prod) => prod.id === id);
        console.log(existingProduct)

        //data.items.quantity= data.items.quantity+=contador;
        item.quantity=item.quantity+=contador;

        console.log(data.items);
        console.log(cantidad);    

        if (existingProduct) {
            //localStorage.setItem('productos_agregados', JSON.stringify(data.items));
            setData({                
                items: [...data.items],  
                cantidad: data.cantidad + contador,
                precioTotal: data.precioTotal + (item.precio * contador)
            })
            console.log(setData);
        } else {
            
            setData({
                items: [ ...data.items, item ],
                cantidad: data.cantidad += contador,
                precioTotal: data.precioTotal + (item.precio * contador)
                
            })

    

        /* if (existingProduct) {
            setData({
                //itemsQuantity: [...data.itemsQuantity, contador],
                cantidad: data.cantidad + contador,
                items: [...data.items, {item: producto, quantity: contador}],  
                precioTotal: data.precioTotal + (producto.precio * contador)
            })
            console.log(setData);

        } else {
            // existingProduct.cantidad += contador;
            setData({
                ...data,
                items: [ ...data.items, {item: producto, quantity: contador} ],
                cantidad: data.cantidad + contador,
                precioTotal: data.precioTotal + (producto.precio * contador)
            }) */
       
            // data.items.quantity+=contador;
            console.log(data);
        }
            

        setConfirmMessage(Swal.fire({
            title: `Has agregado ${contador} items al carrito `,
            icon: 'success',
            width: 600,
            padding: '3em',
          }))

          setTimeout(() => {
            setRedirect(true);
          }, 1000);
    }
    

/*     const onAdd = () => {	
        setData({
            ...data, 
            itemsQuantity: [...data.itemsQuantity, contador],
            cantidad: data.cantidad + contador,
            items: [...data.items, item],        
        })
        alert(`Agregaste ${qty} productos al carrito`);	
        setConfirmMessage(Swal.fire({
            title: `Has agregado ${contador} items al carrito `,
            icon: 'success',
            width: 600,
            padding: '3em',
          }))

          setTimeout(() => {
            setRedirect(true);
          }, 1000);
    }

    console.log(data) */


    /* function onAdd() {
        setData({
            ...data, 
            cantidad: data.cantidad + contador,
            items: [...data.items, item],        
        })

        setConfirmMessage(Swal.fire({
            title: `Has agregado ${contador} items al carrito `,
            icon: 'success',
            width: 600,
            padding: '3em',
          }))

          setTimeout(() => {
            setRedirect(true);
          }, 1000);
    } */

    return ( 
        <>
        <div className="container contenedor p-5 mb-5 animate__animated animate__zoomIn">
            <Link to="/" className="links"><ArrowBackIcon /></Link>
            <div className="row text-center align-items-center">
                <div className="col-12 col-md-6">
                    <div className="overlay">
                        <img src={url} alt={nombre} className="img-fluid img-transform"/>
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
                    {/* { redirect && <Redirect to="/cart"/> } */}
                </div>
            </div>  
        </div>
        <Comments/>
        </>
      );
}
 
export default ItemDetail;