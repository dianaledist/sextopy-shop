import React, {useState} from 'react';
import Swal from 'sweetalert2';
import './Comments.scss';

const Comments = () => {
    const [formComment, setFormComment] = useState ({
        nombre : '',
        comentario: '',

    })
    const date = new Date().toISOString().slice(0,10);
    const [totalComment, setTotalComment]=useState([]);

    const handleSubmitComment = (e) => {
        e.preventDefault();

        
        if(formComment.comentario.length>=10 ) {
            setTotalComment([...totalComment, formComment]);
            setFormComment({nombre: '', comentario: ''});
            let timerInterval
                Swal.fire({
                icon: 'success',
                title: 'Comentario añadido con éxito!',
                html: 'La ventana se cierra en <b></b> milisegundos.',
                timer: 1500,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                    timerInterval = setInterval(() => {
                    const content = Swal.getContent()
                    if (content) {
                        const b = content.querySelector('b')
                        if (b) {
                        b.textContent = Swal.getTimerLeft()
                        }
                    }
                    }, 100)
                },
                willClose: () => {
                    clearInterval(timerInterval)
                }
                }).then((result) => {

                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log('I was closed by the timer')
                }
                })
                document.querySelector(".form-group").reset();
        } else {
              let timerInterval
                Swal.fire({
                icon: 'error',
                title: 'El comentario debe tener 10 caracteres mínimo!',
                html: 'La ventana se cierra en <b></b> milisegundos.',
                timer: 1500,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                    timerInterval = setInterval(() => {
                    const content = Swal.getContent()
                    if (content) {
                        const b = content.querySelector('b')
                        if (b) {
                        b.textContent = Swal.getTimerLeft()
                        }
                    }
                    }, 100)
                },
                willClose: () => {
                    clearInterval(timerInterval)
                }
                }).then((result) => {
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log('I was closed by the timer')
                }
                })
        }      
    }

    const handleChangeForm = (e) => {
        setFormComment({...formComment, [e.target.name]: e.target.value});
    }


    return ( 
        <>
        <div className="w-100 border-top py-5">
        <p className="text-left h1">Comentarios! </p> 
        <ul className="list-group list-group-flush">
            <li className="list-group-item p-3 mt-4">
                
                    <div className="d-flex align-items-center">
                        
                        <img src='https://i.pravatar.cc/35' alt="avatar" className="img-fluid rounded"/>
                        <span className="ml-1">Vivaciousgreyhound</span>
                        <span className="font-weight-bold ml-3"> 2020-12-27</span>
                    </div>
                    <div className="mt-2">
                        
                        <p className="mt-2 px-2">Muy cómodo, y super divertido jeje</p>
                    </div>
                    
                
    
            </li>

            {
                totalComment.map((comentario,index)=> 
                <li key={index} className="list-group-item p-3 mt-4">
                    <div className="d-flex align-items-center">
                        
                        <img src='https://i.pravatar.cc/35' alt="avatar" className="img-fluid rounded"/>
                        <span className="ml-1">{comentario.nombre}</span>
                        <span className="font-weight-bold ml-3"> {date}</span>
                    </div>
                    <div className="mt-2">
                        
                        <p className="mt-2 px-2">{comentario.comentario}</p>
                    </div>
                </li>
                )
            }
        </ul>
        <div className="w-100 d-flex justify-content-center bg-light p-5">
            <form onSubmit={handleSubmitComment} className="d-flex flex-column p-3 w-75 bg-white form-group">
                <p className="text-left h1">Comenta tu experiencia 😻</p>
                <label>Nombre</label>
                <input type="text" className="border-0 bg-white" name="nombre" onChange={handleChangeForm}></input>
                <label className="mt-3">Comentario</label>
                <textarea className="bg-white border-0" name="comentario" rows="5" onChange={handleChangeForm} ></textarea>
                <input type="submit" value="Enviar comentario" className="btn color-primario text-white btn-lg text-uppercase mt-3"></input>
            </form>
        </div>
        </div>
        </>
        
    );
}
 
export default Comments;