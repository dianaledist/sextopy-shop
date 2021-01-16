import React, {useState, useContext} from 'react';
import Contador from '../../utils/Contador';
import {Store} from '../../../store';
import FinalCounter from '../../utils/FinalCounter/FinalCounter';

const CartTable = ({key, url, nombre, precio, id, cantidad, items}) => {
    const [contador, setContador]= useState({cantidad});
    const [data, setData]= useContext(Store);

    const [precioProducto,setPrecioProducto]= useState(precio)

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
        <tr key={id}>
                    <th>
                    <img src={url} alt={nombre} className="img-fluid pt-3" width="50%"/>
                    </th>
                    <th>
                    <h3 className="text-center mb-3 Bellota-text-bold">{nombre} - ${precio}</h3>
                    </th>
                    <th>
                        <FinalCounter
                        key={items.id}
                        contador={contador}
                        setContador={setContador}
                        cantidad={cantidad}
                        stock={items.stock}
                        setPrecioProducto={setPrecioProducto}
                        precioProducto={precioProducto}
                        />
                       {/*  <Contador 
                        contador={cantidad}
                        setContador={setContador}
                        setContador={setContador}
                        />
                        {<input type="number"
                        value={}
                        ></input>} */}

                    </th>
                    
                    <th>
                    <button className="btn color-primario text-white btn-lg text-uppercase" onClick={ () => onRemove(id)}>BORRAR</button>
                    </th>
                </tr> 

               
                </>
      );
}
 
export default CartTable;