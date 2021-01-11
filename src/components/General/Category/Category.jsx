import {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import Home from '../../Index/Home/Home';
import productosDB from "../../../database/db";
/* import spinner from "../../../assets/images/spinner.gif"; */
import SectionCards from '../../Index/SectionCards/SectionCards';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


const Category = () => {
    const [productos, setProductos] =useState([]);

    const {category_name} = useParams();

  
  const getProductos = new Promise ((resolve,reject)=>{
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
/*     console.log(category_name); */
    getProducstFromDB();
}, [category_name])





    return (
        <>
            <div className="mt-5 mb-5 text-center Shrikhand">
            <h1>Sección {category_name}</h1>
            </div>
            <div className="container">
            <div className="mt-4 row d-flex justify-content-center align-items-center  Bellota-text">
                {
                productos.length ?
                <>
                {productos.map((producto, index) => (
                    <SectionCards 
                    productos={productos}
                    key={index+1}
                    idproducto={producto.id}
                    producto={producto}          
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