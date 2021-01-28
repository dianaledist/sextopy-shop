import React, {useContext} from 'react';
import CreditCard from './CreditCard/CreditCard';
import {Store} from '../../store/index';


const Checkout = () => { 
    const [data, setData]= useContext(Store);

    console.log(data)


    return ( 
        <>
        <div className="container">
        <h1 className="Shrikhand text-center "> Checkout</h1>  
        
        <CreditCard/>
        </div>
        </>
    );
}
 
export default Checkout;