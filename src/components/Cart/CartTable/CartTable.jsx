import React, {useState, useContext} from 'react';
import Contador from '../../utils/Contador';
import {Store} from '../../../store';


const CartTable = ({key, url, nombre, precio, id}) => {
    const [contador, setContador]= useState(1);
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
        <tr>
                    <th>
                    <img src={url} alt={nombre} className="img-fluid pt-3" width="50%"/>
                    </th>
                    <th>
                    <h3 className="text-center mb-3 Bellota-text-bold">{nombre}</h3>
                    </th>
                    <th>
                        <Contador 
                        contador={contador}
                        setContador={setContador}/>


                    </th>
                    <th>
                        <h3>€ {precio} </h3>
                    </th>
                    <th>
                    <button className="btn color-primario text-white btn-lg text-uppercase" onClick={ () => onRemove(id)}>BORRAR</button>
                    </th>
                </tr> 
                </>
      );
}
 
export default CartTable;