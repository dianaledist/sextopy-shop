import React, { useState, useContext } from "react";
import Cards from "react-credit-cards";
import './CreditCard.scss';
import "react-credit-cards/lib/styles.scss";
import {Store} from '../../../store/index';
import {getFirestore} from '../../../database/index';
import Swal from 'sweetalert2';
import {uuid} from 'uuidv4';


const CreditCard = () => {
	const db = getFirestore();

	const [data, setData] = useContext(Store);

	const [confirmMessage, setConfirmMessage] = useState("")

	const [formData, setformData] = useState({
		email: "",
		name: "", 
		tel: "",
		number: "",
		expiry: "",
		cvc: "",
		data: data,
		/* date: firebase.firestore.Timestamp.fromDate(new Date()), */
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
			let timerInterval
			Swal.fire({
			  title: 'Debes completar tus datos 💔 ',
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
		} else {
			formData.id=uuid();
			setformData([formData]);
			Swal.fire({
				title: `<h5>Gracias ${formData.name}<br> Número de seguimiento: ${formData.id}<br>Vuelve pronto 🥰</h5>`,
				showClass: {
				  popup: 'animate__animated animate__fadeInDown'
				},
				hideClass: {
				  popup: 'animate__animated animate__fadeOutUp'
				}
			  }).then(function() {
				window.location = "/";
			});

			  setData({
				items: [],
				cantidad: 0,
				precioTotal: 0
			})
			localStorage.clear();


			  /* db.collection('ventas').add(formData)
				.then(({id}) => {
					setIdCompra(id);
					setData({
						items: [],
						cantidad: 0,
						precioTotal: 0,
					})
				})
				.catch(e => console.log(e)); */
				document.querySelector(".checkout-form").reset();
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
						type="year"
						name="number"
						maxlength="16"
						placeholder="Tarjeta de crédito"
						onChange={handleInputChange}
					/>
					
					<input
						className="input-form"
						type="year"
						name="expiry"
						maxlength="4"
						placeholder="yy/mm"
						onChange={handleInputChange}
					/>
					<input
						className="input-form"
						type="day"
						name="cvc"
						maxlength="3"
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
		</div>
	);
};

export default CreditCard;