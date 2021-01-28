import React, { useState, useContext } from "react";
import Cards from "react-credit-cards";
import './CreditCard.scss';
import "react-credit-cards/lib/styles.scss";
import {Store} from '../../../store/index';


const CreditCard = () => {
	const [venta, completoVenta] = useState(false);

	const [data, setData] = useContext(Store)

	const [formData, setformData] = useState({
		email: "",
		name: "", 
		tel: "",
		number: "",
		expiry: "",
		cvc: "",
		data: data
	  });

	  const { email, name, tel, number, expiry, cvc} = formData;
	  
	const [dataCard, setDataCard] = useState({
		cvc: "",
		expiry: "",
		name: "",
		number: "",
		locale: {valid:"Válido hasta"},
		placeholders: {name: "TU NOMBRE AQUÍ"}
	});

	const handleInputChange = (e) => {
		setDataCard({
			...dataCard,
			[e.target.name]: e.target.value
		});
		setformData({
			...formData,
			[e.target.name]: e.target.value
		})
	};
	console.log(formData)

	const handleSubmit = e => {
		e.preventDefault();
		if ([email, name, tel, number, cvc].includes("")) {
		alert("formulario vacio")
		} else {
			alert(`compra realizada ${formData.name} $ ${formData.data.precioTotal} - ${formData.email}`)
			completoVenta(true)
			console.log(venta)
		}
	}

	return (
		<div id="PaymentForm" className="container-fluid">
			<div className="row">
				<form action="" className="checkout-form col-12 col-md-6" onSubmit={handleSubmit}>								
					<input
						className="input-form"
						type="text"
						name="name"
						placeholder="Nombre completo"
						onChange={handleInputChange}
					/>
					<input
						className="input-form"	
						type="email"
						name="email"
						placeholder="E-mail"
						onChange={handleInputChange}
					/>
					<input
						className="input-form"	
						type="tel"
						name="tel"
						placeholder="Teléfono de contacto"
						onChange={handleInputChange}
					/>
					<input
						className="input-form"	
						type="number"
						name="number"
						placeholder="Tarjeta de crédito"
						onChange={handleInputChange}
					/>
					
					<input
						className="input-form"
						type="month"
						name="expiry"
						min="2021-01"
						placeholder="yy/mm"
						onChange={handleInputChange}
					/>
					<input
						className="input-form"
						type="number"
						name="cvc"
						maxlength="3"
						placeholder="CVC"
						onChange={handleInputChange}
					/>
					<div className="d-flex justify-content-end pb-5">
						<button type="submit" className="btn color-primario  text-white btn-lg text-uppercase mt-3 ">ACEPTAR COMPRA</button>
					</div>
				</form>
				<div className="col-12 col-md-6 pb-5">
					<Cards 
						cvc={dataCard.cvc}
						expiry={dataCard.expiry}
						focus={dataCard.focus}
						name={dataCard.name}
						number={dataCard.number}
						locale={dataCard.locale}
						placeholders={dataCard.placeholders}
					/>
				</div>
			</div>
		</div>
	);
};

export default CreditCard;