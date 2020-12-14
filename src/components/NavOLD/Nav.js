import React, { Fragment } from 'react';
import './nav.scss';
import logo from '../../assets/images/sextopy_logo.svg';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import NavShopItem from '../NavShopItem/NavShopItem';
/* import MenuNav from './MenuNav'; */
/* import {PersistentDrawerLeft} from '../Drawer/Drawer';
 */

const Nav = () => {

    function openModal() {
        console.log("abriendo modal");
        
    }

    function openMenu(){
        
        console.log("abriendo menu izquierdo");
        
    }

    return (
    <Fragment>
        <header className="container-fluid header-nav">
            <section className="navbar-section d-flex justify-content-between">
                <div className="navbar-menulogo d-flex align-items-center">
                    <a href="#menu">
                        <MenuIcon fontSize="large"  className="menu_icon icons icon open" onClick={ () => openMenu()}/>      
                    </a>  

      
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
                        <NavShopItem/>           
                    </div>
                </div>
            </section>
        </header>

    </Fragment>

        
    );
}
 
export default Nav;