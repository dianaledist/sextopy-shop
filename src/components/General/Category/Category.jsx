import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Home from '../../Index/Home/Home';

const Category = () => {
    const {category_name} = useParams();

    useEffect(() => {
        console.log(category_name);
    }, [category_name])


    return (
        <>
            <div className="pt-5 pb-5 text-center Shrikhand">
            <h1>Sección {category_name}</h1>
            <Home/>
            </div>
        </>
    )
}

export default Category;