import React, {useState} from 'react';
import Swal from 'sweetalert2';

const Comments = () => {
 /*    const [formComment, setFormComment] = useState ({
        name : '',
        comment:'',

    }) */
    const [comment, setComment] =useState('');
    const [totalComment, setTotalComment]=useState([]);

    const handleSubmitComment = (e) => {
        e.preventDefault();
        console.log(comment);
        
        if(comment.length>=10) {
            setTotalComment([...totalComment,comment]);
            setComment('');
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
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log('I was closed by the timer')
                }
                })
        } else {
            /* Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'El comentario debe tener 10 caracteres mínimo!'
              }) */
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
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log('I was closed by the timer')
                }
                })
        }      
    }

    const handleChangeComment = (e) => {
        setComment(e.target.value);
    }


    return ( 
    <>
    <div className="d-flex flex-column">
    <h1 className="text-left">Comentarios! </h1> 
    <ul>
        <li>Muy cómodo, y super divertido jeje </li>
        {
            totalComment.map((comment,index)=> 
            <li key={index}>
                <p>{comment}</p>
            </li>
            )
        }
    </ul>
    
    <form onSubmit={handleSubmitComment}>
{/*         <input type="text" ></input> */}
        <textarea name="comentario" onChange={handleChangeComment} ></textarea>
        <input type="submit" value="Enviar comentario"></input>
        
    </form>
    </div>
    </>
    
    );
}
 
export default Comments;