import React from 'react';
import '../MenuNavDer/MenuNavDer.scss';

const MenuNav = () => {
    return (
        <div className="contenedor">
            <nav id="menu">
                <a href="#index">
                <img className="icon close" src="#" alt="X"/>
                </a>

                <ul>
                <li><a href="#index" className="current">Inicio </a></li>
                <li><a href="#index">Nosotros</a></li>
                <li><a href="#index">Productos</a></li>
                <li><a href="#index">Contacto</a></li>
                </ul>
            </nav>
        </div>

      );
}
 
export default MenuNav;