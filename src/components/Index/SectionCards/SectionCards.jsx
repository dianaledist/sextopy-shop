import React, { Fragment, useState } from 'react';
import './SectionCards.scss';
import Contador from '../../utils/Contador';
import {Link, useParams, Redirect} from 'react-router-dom';
import Swal from 'sweetalert2';

const SectionCards = ({key, producto, productos, carritoCompra, setCarritoCompra, idproducto, props}) => {

    const {url, nombre, descripcion, precio, stock} = producto;
    const {id} = useParams()

    const [contador, setContador]= useState(1);
    const [redirect, setRedirect] = useState(false);
    const [confirmMessage, setConfirmMessage] = useState("")

    function onAdd() {
        setConfirmMessage(Swal.fire({
            title: `Has agregado ${contador} items al carrito `,
            icon: 'success',
            width: 600,
            padding: '3em',
          }))

          setTimeout(() => {
            setRedirect(true);
          }, 1000);
    }

    console.log(idproducto)

    return (

        <Fragment>
            
           <div className="col-12 col-lg-4 mb-4">

            <div className="card-producto text-center animate__animated animate__zoomIn" >
              
                <img src={url} alt={nombre} className="img-fluid pt-3"/>
                <div className="info-producto text-center p-4 Bellota-text">
                    <Link to={`/detail/${idproducto}`} className="links">
                        <h3 className="text-center mb-3 Bellota-text-bold">{nombre}</h3>
                    </Link>
                    <p>{descripcion}</p>
                    <p className="precio font-weight-bold">$ {precio*contador}</p>
                    <Contador
                    contador={contador}
                    setContador={setContador}
                    stock={stock}
                    /* id={id} */
                    />
                    <button className="btn color-primario text-white btn-lg text-uppercase mt-3" onClick={ () => onAdd(id)}>Agregar al Carrito</button>
                    { redirect && <Redirect to="/cart"/> }
                </div>
            </div>
            </div>  
   
        </Fragment>
      );
}
 
export default SectionCards;