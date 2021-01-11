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

    return (
    <>
    <p key={item.id}>{item.nombre} - ID: {id}<CancelIcon onClick={ () => onRemove(id)}/></p>
    </>
    );
}
 
export default CartList;