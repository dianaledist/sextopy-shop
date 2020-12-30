import React, {useState} from 'react';

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
        } else {
            alert("El comentario debe tener como mínimo 10 caracteres")
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