import React, {useState, useContext} from 'react';
import Contador from '../../utils/Contador';
import {Store} from '../../../store';
import FinalCounter from '../../utils/FinalCounter/FinalCounter';

const CartTable = ({key, url, nombre, precio, id, cantidad, items}) => {
    const [contador, setContador]= useState(cantidad);
    const [data, setData]= useContext(Store);


    const [precioProducto,setPrecioProducto]= useState(precio);
/*     const [cantidadProducto,setCantidadProducto]= useState(cantidad) */
console.log(precioProducto)
console.log(contador)

    function onRemove(){
        console.log(`removiendo ${id}`);
        const find = data.items.find((prod) => prod.id === id);
        const filter = data.items.filter((prod) => prod.id !== id);
/*         console.log(data.precioTotal);
        console.log(find);
        console.log(find.precio);
        console.log(find.quantity);
        console.log(filter);
 */
        setData({ 
            ...data, 
            items: filter,
            cantidad: data.cantidad-cantidad,
            precioTotal: data.precioTotal - (find.precio*find.quantity)
        });

    }   

    console.log(data)

    return (
        <>
        <tr key={id}>

                    <th>
                    <img src={`../../../products/${url}`} alt={nombre} className="img-fluid pt-3" width="50%"/>
                    </th>
                    <th>
                    <h3 className="text-center mb-3 Bellota-text-bold">{nombre} - ${precio}</h3>
                    </th>
                    <th>
                        <FinalCounter
                        key={items.id}
                        items={items}
                        contador={contador}
                        setContador={setContador}
                        cantidad={cantidad}
                        stock={items.stock}
                        setPrecioProducto={setPrecioProducto}
                        precioProducto={items.precio}
                        />
                    </th>
                    <th>
                        <p>€{precio*items.quantity}</p>
                    </th>
                    <th>
                    <button className="btn color-primario text-white btn-lg text-uppercase" onClick={ () => onRemove(id)}>BORRAR</button>
                    </th>
                </tr> 

               
                </>
      );
}
 
export default CartTable;