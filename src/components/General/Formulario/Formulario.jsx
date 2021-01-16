import React, {useState}  from 'react';
import './formulario.scss';
import mouthImage from '../../../assets/images/erotic-mouth.png';
import Swal from 'sweetalert2';

const Formulario = ({nombre,email}) => {

    const [contacto,setContacto]= useState({
        nombre: '',
        email: '',
        mensaje: ''
    })


    console.log(nombre);
    const enviarForm = e => {
        e.preventDefault();
        console.log('Enviando formulario...');
        if (!nombre|| !email ) {
            console.log(nombre)
            Swal.fire({
                title: `Gracias ${nombre} por enviar tus comentarios. Te escribimos a la brevedad 🖤`,
                width: 600,
                padding: '3em',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url('../../assets/images/nyan-cat.gif')
                  left top
                  no-repeat`

              })
        } 
    
    }

 

    return ( 
        <div className="form_body container-fluid vh-100 d-flex justify-content-center align-items-center">
            <div className="w-75 formulario no-gutters d-flex p-5 row animate__animated animate__backInUp">
                <div className="col-12">
                    <h1 className="Shrikhand text-center ">¿Querés consultar algo?</h1>
                </div>
                <div className="col-12 col-sm-6 text-center">                 
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <img src={ mouthImage} alt="Lenceria erotica sextopy" className="img-fluid w-75 p-3" />
                    </div>
                </div>
                <div className="col-12 col-sm-6 d-flex">                
                    <form className="form-group w-100 h-100" onSubmit={enviarForm}>
                        <h3 className="Shrikhand">Escribinos</h3>
                        <label className="Bellota-text-bold">Nombre y apellido</label>            
                        <input 
                            type="text" 
                            className="form-control input-form Bellota-text" 
                            placeholder="Escribe tu nombre aquí..." 
                            id="nombre-form" />
                        <label className="Bellota-text-bold">E-mail</label>            
                        <input 
                            type="email" 
                            className="form-control input-form Bellota-text" 
                            placeholder="Tu mejor email..." 
                            id="email-form" />
                        <label className="Bellota-text-bold">Comentarios</label>  
                        <textarea 
                            name="" 
                            id="" 
                            className="form-control input-form Bellota-text" 
                            placeholder="¿Cómo podríamos satisfacer tus deseos?">
                        </textarea> 
                        <input 
                            type="submit" 
                            className="btn btn-rosa mt-3 form-control border-0 Bellota-text" 
                            value="Enviar"/>   
                                        
                    </form>
                </div>
            </div>        
        </div>
     );
}
 
export default Formulario;