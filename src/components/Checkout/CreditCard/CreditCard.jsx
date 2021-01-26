import React, { useState } from "react";
import Cards from "react-credit-cards";
import './CreditCard.scss';
import "react-credit-cards/es/styles-compiled.css";


const CreditCard = () => {
	const [data, setData] = useState({
		cvc: "",
		expiry: "",
		name: "",
		number: ""
	});
	const handleInputChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value
		});
	};

	return (
		<div id="PaymentForm">
			<Cards
				cvc={data.cvc}
				expiry={data.expiry}
				focus={data.focus}
				name={data.name}
				number={data.number}
			/>
			<form action="" className="checkout-form">								
				<input
					className="input-form"
					type="text"
					name="name"
					placeholder="Your Name"
					onChange={handleInputChange}
				/>
				<input
					className="input-form"	
					type="number"
					name="number"
					placeholder="Card Number"
					onChange={handleInputChange}
				/>
                <input
					className="input-form"
					type="date"
					name="expiry"
					placeholder="mm-yy"
					onChange={handleInputChange}
				/>
                <input
					className="input-form"
					type="number"
					name="cvc"
					placeholder="CVC"
					onChange={handleInputChange}
				/>
			</form>
		</div>
	);
};

export default CreditCard;