import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import CreditCard from './CreditCard/CreditCard';
import {Store} from '../../store/index';


const Checkout = () => { 
    const [data, setData]= useContext(Store);

    console.log(data)


    return ( 
        <>
        <div className="container-fluid p-3">
            <p className="d-flex Bellota-text"><Link to = {"/"} className="px-1">Home</Link> {" > "} <span className="px-1">  Checkout</span>
            </p>
        </div>

        <div className="container">
        <h1 className="Shrikhand text-center "> Checkout</h1>  
        
        <CreditCard/>
        </div>
        </>
    );
}
 
export default Checkout;