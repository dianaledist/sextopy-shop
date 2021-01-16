import ItemDetailContainer from '../../Products/ItemDetailContainer/ItemDetailContainer';
import {useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom';
import { Store } from '../../../store';


const Detail = () => {
    const {id} = useParams();
    const [data, setData]= useContext(Store);

    useEffect(() => {
        console.log(id);
    }, [id])

    return (
        <>
            <ItemDetailContainer
            data={data}
            key={id}/>
        </>
    )
}

export default Detail;