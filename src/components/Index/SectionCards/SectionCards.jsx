import React, { Fragment, useState, useContext } from 'react';
import './SectionCards.scss';
import Contador from '../../utils/Contador';
import {Link, useParams, Redirect} from 'react-router-dom';
import Swal from 'sweetalert2';
import {Store} from '../../../store';

const SectionCards = ({producto, productos, carritoCompra, setCarritoCompra, idproducto, props}) => {

    const {url, nombre, descripcion, precio, stock} = producto;
    const {id} = useParams();
    const [data, setData]= useContext(Store);

    const [contador, setContador]= useState(1);

    const [redirect, setRedirect] = useState(false);
    const [confirmMessage, setConfirmMessage] = useState("")

    const onAdd = () => {	

        const existingProduct=data.items.find((prod) => prod.id === idproducto);
        console.log(existingProduct)

        //data.items.quantity= data.items.quantity+=contador;
        producto.quantity=producto.quantity+=contador;

        console.log(data.items);
        console.log(producto.quantity);    

        if (existingProduct) {
            //localStorage.setItem('productos_agregados', JSON.stringify(data.items));
            setData({                
                items: [...data.items],  
                cantidad: data.cantidad + contador,
                precioTotal: data.precioTotal + (producto.precio * contador)
            })
            console.log(setData);
        } else {
            
            setData({
                items: [ ...data.items, producto ],
                cantidad: data.cantidad += contador,
                precioTotal: data.precioTotal + (producto.precio * contador)
                
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

    console.log(data)

    console.log(idproducto)

    return (

        <Fragment>
            
           <div className="col-12 col-lg-4 mb-4">
            <div className="card-producto text-center animate__animated animate__zoomIn" key={idproducto}>              
                <img src={url} alt={nombre} className="img-fluid pt-3"/>
                <div className="info-producto text-center p-4 Bellota-text">
                    <Link to={`/detail/${idproducto}`} className="links">
                        <h3 className="text-center mb-3 Bellota-text-bold">{nombre}</h3>
                    </Link>
                    <p>{descripcion}</p>
                    <p className="precio font-weight-bold">$ {precio*contador}</p>
                    <div className="container">
                    <Contador
                    key={idproducto}
                    contador={contador}
                    setContador={setContador}
                    stock={stock}
                    id={idproducto}
                    />
                    </div>
                    <button className="btn color-primario text-white btn-lg text-uppercase mt-3" onClick={ () => onAdd(id)}>Agregar al Carrito</button>
                    {/* { redirect && <Redirect to="/cart"/> } */}
                </div>
            </div>
            </div>  
   
        </Fragment>
      );
}
 
export default SectionCards;