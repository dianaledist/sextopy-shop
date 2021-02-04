import React, { useState, useContext } from "react";
import {Link} from 'react-router-dom';
import Cards from "react-credit-cards";
import './CreditCard.scss';
import "react-credit-cards/lib/styles.scss";
import {Store} from '../../../store/index';
import {getFirestore} from '../../../database/index';
import Swal from 'sweetalert2';
import firebase from 'firebase/app';

const CreditCard = () => {
	const db = getFirestore();

	const [data, setData] = useContext(Store);

	const [venta, ventaCerrada] = useState(false);
	const [idCompra, setIdCompra] = useState('');
	const [formData, setformData] = useState({
		email: "",
		name: "", 
		tel: "",
		number: "",
		expiry: "",
		cvc: "",
		data: data,
		date: firebase.firestore.Timestamp.fromDate(new Date()),
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

	const borrarStorage = ()=> {
		document.querySelector(".checkout-form").reset();
		setData({
			items: [],
			cantidad: 0,
			precioTotal: 0,
		})
	}


	const setAlert = ()=> {
		let timerInterval
		Swal.fire({
		  title: 'Faltan datos o no son correctos 💔 ',
		  html: 'Me cierro en <b></b> milisegundos.',
		  timer: 1500,
		  timerProgressBar: true,
		  didOpen: () => {
			Swal.showLoading()
			timerInterval = setInterval(() => {
			  const content = Swal.getContent()
			  if (content) {
				const b = content.querySelector('b')
				if (b) {
				  b.textContent = Swal.getTimerLeft()
				}
			  }
			}, 100)
		  },
		  willClose: () => {
			clearInterval(timerInterval)
		  }
		}).then((result) => {
		  /* Read more about handling dismissals below */
		  if (result.dismiss === Swal.DismissReason.timer) {
			console.log('I was closed by the timer')
		  }
		})
	}

	console.log(formData)

	const handleSubmit = e => {
		e.preventDefault();
		
		
			if(number==number.match(/^4\d{3}-?\d{4}-?\d{4}-?\d{4}$/) || number==number.match(/^5[1-5]\d{2}-?\d{4}-?\d{4}-?\d{4}$/)) {
			setformData([formData]);

			db.collection('ventas').add(formData)
			.then(({id}) => {
				ventaCerrada(true);
				setIdCompra(id);
				setData({
					items: [],
					cantidad: 0,
					precioTotal: 0
				})
				borrarStorage();
				
			})
			.catch(e => console.log(e));
			localStorage.clear();
			} else {
				setAlert();
			}
			
	}

	return (
		<div id="PaymentForm" className="container-fluid">
			{
                !venta ?
			<div className="row">
				<form action="" className="checkout-form col-12 col-md-6" onSubmit={handleSubmit}>								
					<input
						className="input-form"
						type="text"
						name="name"
						placeholder="Nombre completo"
						required
						onChange={handleInputChange}
					/>
					<input
						className="input-form"	
						type="email"
						name="email"
						placeholder="E-mail"
						required
						onChange={handleInputChange}
					/>
					<input
						className="input-form"	
						type="tel"
						name="tel"
						required
						placeholder="Teléfono de contacto"
						onChange={handleInputChange}
					/>
					<input
						className="input-form"	
						type="text"
						name="number"
						maxlength="16"
						required pattern="[0-9]{16}"
						placeholder="xxxxxxxxxxxxxxxx"
						onChange={handleInputChange}
					/>
					
					<input
						className="input-form"
						type="text"
						name="expiry"
						maxlength="4"
						required pattern="[0-9]{4}"
						placeholder="mmYY"
						onChange={handleInputChange}
					/>
					<input
						className="input-form"
						type="text"
						name="cvc"
						maxlength="3"
						required pattern="[0-9]{3}"
						placeholder="CVC"
						onChange={handleInputChange}
					/>
					<div className="d-flex justify-content-end pb-5">
						<button 
						disabled={data.items.length ? null : 'disabled' } 
						type="submit" className="btn color-primario  text-white btn-lg text-uppercase mt-3 ">ACEPTAR COMPRA</button>
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
			: 
			<div className="container contenedor p-5 mb-5 animate__animated animate__zoomIn text-center" >
				<h3>Gracias por formar parte de la comunidad Sextopy 🖤</h3><h3 className="p-3"> Tu código de seguimiento es: <strong>{idCompra}</strong></h3>

				<h4>Te esperamos pronto 💄 </h4>
				<Link to={`/`} className="links">
                    <button className="btn color-primario text-white btn-lg text-uppercase mt-3">Home</button>
				</Link>

			</div>
			
			}
		</div>
	);
};

export default CreditCard;