import ItemDetailContainer from '../../Products/ItemDetailContainer/ItemDetailContainer';
import {useEffect} from 'react';
import {useParams} from 'react-router-dom';

const Detail = () => {
    const {id} = useParams();

    useEffect(() => {
        console.log(id);
    }, [id])

    return (
        <>
            <ItemDetailContainer
            id={id}/>
        </>
    )
}

export default Detail;