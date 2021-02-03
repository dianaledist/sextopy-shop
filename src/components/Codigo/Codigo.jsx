import React, {useState, useEffect} from 'react';
import {getFirestore} from '../../database/index';
import './Codigo.scss';

const Codigo = () => {
    const [idCompra, setIdCompra] = useState("");

    const [dataPedido, setDataPedido] = useState({});
  useEffect(() => {});

    const db = getFirestore();

    const handleInputChange = (e) => {
        setIdCompra(e.target.value);
    };
    
    const handleSubmit = e => {
        e.preventDefault();
        db.collection("ventas")
        .get()
        .then((docs) => {
          let venta = [];
          docs.forEach((doc) => {
            if (doc.id === idCompra) {
              venta.push({ id: doc.id, data: doc.data() });
              setDataPedido(venta[0]);
            }
          });
        })
        .catch((e) => console.log(e));
    }


    return ( 
        <>
        <div className="container p-5">
        <h1 className="Shrikhand text-center p-5">Sigue tu pedido</h1>
        {
            Object.keys(dataPedido).length>0 ?
            <>
            <ul className="list-group Bellota-text">
            <li className="list-group-item"> Código: {dataPedido.id}</li>
            <li className="list-group-item"> Nombre: {dataPedido.data.name}</li>
            <li className="list-group-item"> Productos comprados: 
                <ul className="list list-group">
                    {dataPedido.data.data.items.map((item, index) => {
                    return (
                    <li className="d-flex align-items-center">
                        <div className="codigo-img p-1">
                        <img src={`../../../products/${item.url}`} alt={item.nombre} className="img-fluid pt-3" />
                        </div>
                        {item.nombre} | {item.quantity} unidades
                    </li>
                    )})
                    }
                </ul>
            </li>
            <li className="list-group-item">Precio total: $ {dataPedido.data.data.precioTotal}</li>
            </ul>
            </>
            :
            ("")
        }
        <form action="" className="checkout-form w-50 mx-auto text-center" onSubmit={handleSubmit}>	
        <input
            className="input-form mt-5"
            type="text"
            name="codigo"
            placeholder="Código de seguimiento"
            onChange={handleInputChange}
            required
        />
        <button
        type="submit" className="btn color-primario text-white btn-lg text-uppercase mt-3 ">Solicitar info</button>
        </form>
        
        </div>
        
        </>
 );
}
 
export default Codigo;