import React, {useContext, useState} from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import {Store} from '../../../../store';
import Contador from '../../../utils/Contador';

const CartList = ({item,id, qty}) => {
    const [data, setData]= useContext(Store);

    function onRemove(){
        console.log(`removiendo ${id}`);
        const filter = data.items.filter((prod) => prod.id !== id);
        console.log(filter);
        setData({ 
            ...data, 
            items: filter,
            cantidad: data.cantidad-qty,
        });
    }

    console.log(data.items.length)

    return (
    <>
    <div className="d-flex align-items-center justify-content-around my-3" >
    <img src={item.url} alt={item.nombre} className="img-fluid" width="15%"/><p  className="mb-0">{item.nombre} - Cantidad: {item.quantity}</p>
    <CancelIcon onClick={ () => onRemove(id)}/>
    </div>
    </>
    );
}
 
export default CartList;