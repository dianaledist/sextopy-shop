import {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import Home from '../../Index/Home/Home';
/* import productosDB from "../../../database/db"; */
/* import spinner from "../../../assets/images/spinner.gif"; */
import SectionCards from '../../Index/SectionCards/SectionCards';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {getFirestore} from '../../../database/index';
import './Category.scss';


const Category = () => {
    const [productos, setProductos] =useState([]);

    const {category_name} = useParams();


    const db = getFirestore();

    useEffect(() => {
        if(category_name) {
            db.collection('productos').where('categoria', '==', category_name).get()
            .then(response => {
                let arr = [];
                response.forEach(doc => {
                    arr.push({id: doc.id, data: doc.data()})
                })

                setProductos(arr);
            })
        }
    }, [category_name])

  
/*   const getProductos = new Promise ((resolve,reject)=>{
    const productos_categoria = productosDB.filter(item=> {
      return item.categoria===category_name
    })

    setTimeout(() => {
      resolve(productos_categoria)
    }, 500)
  })

  const getProducstFromDB = async () => {
    try {
        const result = await getProductos;
        setProductos(result);
    } catch(error) {
        alert("No podemos mostrar los productos en este momento");
    }
}

console.log(productos)

  useEffect(() => {
    console.log(category_name);
    getProducstFromDB();
}, [category_name]) */





    return (
        <>
            <div className="mt-5 mb-5 text-center Shrikhand">
            <h2 className="category_title">{category_name.split('-').join(' ')}</h2>
            </div>
            <div className="container">
            <div className="mt-4 row d-flex justify-content-center align-items-center  Bellota-text">
                {
                productos.length ?
                <>
                {productos.map((producto, index) => (
                    <SectionCards 
                    productos={productos}
                    key={producto.data.id}
                    idproducto={producto.data.id}
                    producto={producto.data}   
                    url={producto.data.url}  
                    nombre={producto.data.nombre}  
                    descripcion={producto.data.descripcion}  
                    precio={producto.data.precio}  
                    stock={producto.data.stock}  
                    
                    /> 
                ))} 
                </> :
                <>
                <Link to="/" className="links pr-5 mb-5"><ArrowBackIcon /></Link>
                <p className="loading mb-5">¿Estás buscando la sección correcta? 💜 </p>

                </>
                }            
            </div>
            </div>

        </>
    )
}

export default Category;