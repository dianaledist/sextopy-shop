import {Link} from 'react-router-dom';
import './categoria.scss'
import Ropa from '../../../../assets/images/ropa.png';
import Accesorios from '../../../../assets/images/accesorios.png';
import Juguetes from '../../../../assets/images/juguetes.png';
import Novedades from '../../../../assets/images/novedades.png';


const categoryItems = [
    {
        texto: 'Ropa cool',
        ruta: '/category/ropa-cool',
        img: Ropa
    },
    {
        texto: 'Accesorios',
        ruta: '/category/accesorios',
        img: Accesorios
    },
    {
        texto: 'Juguetes y etc',
        ruta: '/category/juguetes-y-etc',
        img: Juguetes
    },
    {
        texto: 'Novedades',
        ruta: '/category/novedades',
        img: Novedades
    },

  ]

const Categoria = () => {
    return ( 
        <div className="container row">
            {categoryItems.map((text, index) => (
            
                <div className="col-12 col-md-6 bg-ligh">
                    <div className="cont d-flex justify-content-center">
                        <div className="w-75 imagen">
                            <img src={text.img} alt="dsfd" className="img-fluid"/>
                        </div>
                        
                        <div className="texto">
                            <Link to={text.ruta}><p className="Bellota-text h1 text-white px-4 py-2">{text.texto}</p></Link>
                        </div>
                    </div>
                    
                </div>
                
            
        ))}
        </div>
     );
}
 
export default Categoria;