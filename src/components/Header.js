import React, { Fragment } from 'react';
import '../styles/_header.scss';
import logo from '../assets/images/sextopy_logo.svg';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
/* import PersonIcon from '@material-ui/icons/Person'; */

const Header = () => {

    function openModal() {
        console.log('abriendo modal');
    }

    function openMenu(){
        console.log('abriendo menu lateral');
    }

    return (
    <Fragment>
        <header className="container-fluid">
            <section className="navbar-section d-flex justify-content-between">
                <div className="navbar-menulogo d-flex align-items-center">
                    <MenuIcon fontSize="large" className="menu_icon icons" onClick={ () => openMenu()}/>        
                  
                    <a href="#index" className="icons">
                        <div className="d-flex justify-content-center">
                        <img src={logo}  width="80%" alt="logo sextopy"/>
                        </div>
                    </a>
                    
                </div>
                <div className="navbar-right d-flex justify-content-end">
                    <div className="d-flex align-items-center">
                        <a href="#index" className="icons">
                            <ExitToAppIcon fontSize="large" className="icons d-none d-md-block mr-2" onClick={ () => openModal()}/>
                        </a>
                        <a href="#index" className="icons shop_image">
                            
                            <span className="shop_cantidad d-flex justify-content-center pt-2">0</span>
                        </a>                     
                    </div>
                </div>
            </section>
        </header>

    </Fragment>

        
    );
}
 
export default Header;