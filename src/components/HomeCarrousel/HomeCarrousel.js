import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import imagen1 from "../../assets/images/carousel1.jpg";
import imagen2 from "../../assets/images/carousel2.jpg";
import imagen3 from "../../assets/images/carousel3.jpg";

const HomeCarrousel = () => {
    return (

    <Carousel className="Bellota-text">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imagen1}
            alt="Imagen de lencería erótica"
          />
          <Carousel.Caption>
            <h3 className="Bellota-text-bold">Novedades exclusivas para sextopers</h3>
            <p>Lo último en ropa para sentirte bien con vos y las demás personas</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imagen2}
            alt="Labios pintados de rojo"
          />
      
          <Carousel.Caption>
            <h3 className="Bellota-text-bold">Un beso dice mas que mil palabras</h3>
            <p>Si querés saber los trucos para el placer, entra a leer la nota.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imagen3}
            alt="Rosa roja sobre el hombro"
          />
      
          <Carousel.Caption>
            <h3 className="Bellota-text-bold">Mi cuerpo, mi espacio</h3>
            <p>Cómo preparar un entorno agradable para explorar los sentidos.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    );
}
 
export default HomeCarrousel;