import React, {useContext, useState} from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import {Store} from '../../../../store';
import './CartList.scss';

const CartList = ({item,id, cantidad}) => {
    const [data, setData]= useContext(Store);
    const [qtyParcial, setQtyParcial]= useState(cantidad)

    function onRemove(){
        console.log(`removiendo ${id}`);
        const find = data.items.find((prod) => prod.id == id);
        const filter = data.items.filter((prod) => prod.id !== id);
        console.log(find);
        console.log(filter);

       
        setData({ 
            ...data, 
            items: filter,
            cantidad: data.cantidad-cantidad,
            precioTotal: data.precioTotal - (find.precio*find.quantity)
        });
        setQtyParcial(qtyParcial-data.cantidad)

        const productos=JSON.stringify([data.items, data.cantidad, data.precioTotal]);
        localStorage.setItem('productos', productos);
        find.stock=find.stock+=find.quantity;
        item.quantity=0;
        
        if(data.items.length===1){
            console.log(data.items.quantity)
            setData({
                items: [],
                cantidad: 0,
                precioTotal: 0,
            })
            localStorage.clear();
        } 
    }

    return (
    <>
    <div className="d-flex align-items-center justify-content-between my-3" >
        <div className="cartlist-gral d-flex align-items-center">
            <div className="cartlist">
                <p className="mb-0 cartlist-cantidad"> {qtyParcial}</p>
                <img src={item.url} alt={item.nombre} className="img-fluid cartlist-img"/>
                {/* <img src={`../../../products/${item.url}`} alt={item.nombre} className="img-fluid cartlist-img"/> */}
            </div>
            <div className="cartlist-texto text-left">
                <p className="mb-0 cartlist-texto-nombre">{item.nombre}</p>
            </div>
        </div>
        <div className="justify-content-end">
            <span className="font-weight-bold">$ {item.precio}</span><CancelIcon onClick={ () => onRemove(id)}/>
        </div>
    
    
    </div>
    </>
    );
}
 
export default CartList;