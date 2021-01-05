import React, {useState} from 'react';
import './ItemDetail.scss';
import Contador from '../../utils/Contador';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Link, Redirect} from 'react-router-dom';
import Comments from '../Comments/Comments';
import Swal from 'sweetalert2';

const ItemDetail = ({item}) => {
    const {id, url, nombre, descripcion, cttas, precio, stock} = item;

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
    return ( 
        <>
        <div className="container contenedor p-5 mb-5 animate__animated animate__zoomIn">
            <Link to="/" className="links"><ArrowBackIcon /></Link>
            <div className="row text-center align-items-center">
                <div className="col-12 col-md-6">
                    <div className="overlay">
                        <img src={url} alt={nombre} className="img-fluid img-transform"/>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <h2 className="display-4 Bellota-text-bold">{nombre}</h2>
                    <h3>{descripcion}</h3>
                    <p >{cttas} </p>
                    <h3 className="py-3">$ {precio*contador}</h3>
                    <Contador
                    contador={contador}
                    setContador={setContador}
                    stock={stock}
                    id={id}
                    />
                    <button className="btn color-primario text-white btn-lg text-uppercase mt-3" onClick={ () => onAdd(id)}>Agregar al Carrito</button>
                    { redirect && <Redirect to="/cart"/> }
                </div>
            </div>  
        </div>
        <Comments/>
        </>
      );
}
 
export default ItemDetail;