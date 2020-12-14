import React from 'react';
import './Footer.scss';

const Footer = (props) => {

    const {titulo, fecha} = props
    return (
        <footer className="footer p-3">
            <p className="text-center ">{titulo} {fecha}</p>
        </footer>
      );
}

export default Footer;