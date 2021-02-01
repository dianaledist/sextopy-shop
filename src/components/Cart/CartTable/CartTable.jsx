import React, {useState, useContext} from 'react';
import {Store} from '../../../store';
import FinalCounter from '../../utils/FinalCounter/FinalCounter';
import CancelIcon from '@material-ui/icons/Cancel';


const CartTable = ({key, url, nombre, precio, id, cantidad, stock, items, item}) => {
    const [contador, setContador]= useState(cantidad);
    const [data, setData]= useContext(Store);

    const [precioProducto,setPrecioProducto]= useState(precio);

    function onRemove(){
        console.log(`removiendo ${id}`);
        const find = data.items.find((prod) => prod.id == id);
        const filter = data.items.filter((prod) => prod.id !== id);
        console.log(filter);
        
        setData({ 
            ...data, 
            items: filter,
            cantidad: data.cantidad-cantidad,
            precioTotal: data.precioTotal - (find.precio*find.quantity)
        });
        setContador(contador-data.cantidad)

        const productos=JSON.stringify([data.items, data.cantidad, data.precioTotal]);
        localStorage.setItem('productos', productos);
        item.stock=item.stock+=item.quantity;
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
        <tr key={id} className="text-center">

                    <th>

                    <img src={item.url} alt={item.nombre} className="img-fluid cartlist-img"/>
                    {/* <img src={`../../../products/${url}`} alt={nombre} className="img-fluid pt-3" width="50%"/> */}
                    </th>
                    <th>
                    <h4 className="text-center Bellota-text-bold">{nombre} - ${precio}</h4>
                    </th>
                    <th width="160px">
                        <FinalCounter
                        key={id}
                        item={item}
                        items={items}
                        contador={contador}
                        setContador={setContador}
                        cantidad={cantidad}
                        stock={item.stock}
                        setPrecioProducto={setPrecioProducto}
                        precio={precio}
                        />
                    </th>
                    <th>
                        $ {precio*contador}
                    </th>
                    <th>
                    <CancelIcon onClick={ () => onRemove(id)}/>
                    </th>
                </tr> 
                <tr>
                    <td colspan="5"><hr></hr></td>
                    
                </tr>
                
                </>
      );
}
 
export default CartTable;