import {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import SectionCards from '../../Index/SectionCards/SectionCards';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {getFirestore} from '../../../database/index';
import './Category.scss';
/* import productosDB from "../../../database/db"; */


const Category = () => {
    const [productos, setProductos] =useState([]);

    const {category_name} = useParams();

    /* const getProductos = new Promise ((resolve,reject)=>{
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
        getProducstFromDB();
    }, [category_name]) */

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


    /* 
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
    
    
    <SectionCards 
                    productos={productos}
                    key={producto.id}
                    idproducto={producto.id}
                    producto={producto}   
                    url={producto.url}  
                    nombre={producto.nombre}  
                    descripcion={producto.descripcion}  
                    precio={producto.precio}  
                    stock={producto.stock}  
                    
                    /> 



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
    
    
    */

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