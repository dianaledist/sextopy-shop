import React, { Fragment, useState, useContext } from 'react';
import './SectionCards.scss';
import {Link, useParams, Redirect} from 'react-router-dom';
import Swal from 'sweetalert2';
import {Store} from '../../../store';


const SectionCards = ({producto, url, nombre, descripcion, precio, stock, productos, carritoCompra, setCarritoCompra, idproducto, cantidad}) => {

/*     const {url, nombre, descripcion, precio, stock} = producto; */
    const {id} = useParams();
    const [data, setData]= useContext(Store);

    const [contador, setContador]= useState(1);

    const [redirect, setRedirect] = useState(false);
    const [confirmMessage, setConfirmMessage] = useState("")


    return (

        <Fragment>
            
           <div className="col-12 col-lg-4 mb-4">
            <div className="card-producto text-center animate__animated animate__zoomIn" key={idproducto}>              
            {/* <img src={url} alt={nombre} className="img-fluid pt-3"/> */}
                
                <img src={`../../../products/${url}`} alt={nombre} className="img-fluid pt-3"/>
                <div className="info-producto text-center p-4 Bellota-text">
                    <Link to={`/detail/${idproducto}`} className="links">
                        <h3 className="text-center mb-3 Bellota-text-bold">{nombre}</h3>
                    </Link>
                    <p>{descripcion}</p>
                    <p className="precio font-weight-bold">$ {precio*contador}</p>
                    <div className="container">
                    {/* <Contador
                    key={idproducto}
                    contador={contador}
                    setContador={setContador}
                    stock={stock}
                    id={idproducto}
                    cantidad={contador}

                    /> */}
                    </div>
                    <Link to={`/detail/${id}`} className="links">
                    <button className="btn color-primario text-white btn-lg text-uppercase mt-3">ver info</button>
                    </Link>

                    
                    {/* { redirect && <Redirect to="/cart"/> } */}
                </div>
            </div>
            </div>  
   
        </Fragment>
      );
}
 
export default SectionCards;