import React, {useEffect, useState}  from 'react';
import './Cart.scss';
import productosDB from "../../database/db.json";
import Contador from '../utils/Contador';
import { Link } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import spinner from "../../assets/images/spinner.gif";


const CartContainer = () => {
    const [productos, setProductos] =useState([]);
    const [contador, setContador]= useState(1);

    const getProductos = new Promise ((resolve,reject)=>{
      setTimeout(() => {
        resolve(productosDB);
      }, 1000)
    })
    useEffect(() => {
      getProductos.then(rta=>setProductos(rta))
    }, [])

    console.log(productos)

    function onAdd() {
        console.log("agregando...");
    }

    return ( 
    <>
    <div className="container pt-3 pb-3">
        <h2 className="Shrikhand text-center ">Tu carrito de compras</h2>
    </div>
    <div className="card-producto container animate__animated animate__zoomIn p-5 mb-5" >
    <Link to="/" className="links"><ArrowBackIcon /></Link>
        <table className="mx-auto">
            <thead>
            {
            productos.length ?
            <>
            {productos.map((producto, index) => (
            <>
            <tr>
                <th>
                <img src={producto.url} alt={producto.nombre} className="img-fluid pt-3" width="50%"/>
                </th>
                <th>
                <h3 className="text-center mb-3 Bellota-text-bold">{producto.nombre}</h3>
                </th>
                <th>
                <Contador
                    contador={contador}
                    setContador={setContador}
                />
                </th>
                <th>
                <button className="btn color-primario text-white btn-lg text-uppercase" onClick={ () => onAdd}>Agregar al Carrito</button>
                </th>
            </tr>            
            </>
            ))}             
            </> :
            <>
            <p className="loading pb-5">Cargando tu carrito de compras 💜 </p>
            <img src={spinner} alt="loading"/>
            </>
            }
                
            </thead>
        </table>
            
    </div>
    </>
    );
}
 
export default CartContainer;