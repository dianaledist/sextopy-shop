import React, {useContext} from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import {Store} from '../../../../store';

const CartList = ({item,id}) => {
    const [data, setData]= useContext(Store);

    function onRemove(){
        console.log(`removiendo ${id}`);
        const filter = data.items.filter((prod) => prod.id !== id);
        console.log(filter);
        setData({ 
            ...data, 
            items: filter 
        });
    }

    console.log(data.items.length)

    return (
    <>
    <div className="d-flex align-items-center justify-content-around my-3">
    <img src={item.url} alt={item.nombre} className="img-fluid" width="15%"/><p key={item.id} className="mb-0">{item.nombre}</p><CancelIcon onClick={ () => onRemove(id)}/>
    </div>
    </>
    );
}
 
export default CartList;