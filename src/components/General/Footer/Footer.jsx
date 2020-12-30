import React from 'react';
import './Footer.scss';

const Footer = (props) => {


    const { fecha} = props
    return (
        <footer className="footer p-3">
            <p className="text-center "> Made with 🖤 by <a className="links" href="https://www.linkedin.com/in/dianaledist/">Diana Leonor Di Stefano</a> @ <a className="links" href="https://disatechgo.com/">disatechgo</a> &copy; {fecha}</p>
        </footer>
      );
}

export default Footer;