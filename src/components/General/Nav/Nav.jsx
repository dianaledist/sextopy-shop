import React, {Fragment} from 'react';

import './nav.scss';

import logo from '../../../assets/images/sextopy_logo.svg';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import DrawerLeft from '../DrawerLeft/DrawerLeft';
import DrawerRight from '../DrawerRight/DrawerRight';

const Nav = () => {
    
    return (
        <Fragment>
        <header className="container-fluid Bellota-text">
        <section className="navbar-section d-flex justify-content-between ">
        <div className="navbar-menulogo d-flex align-items-center">
            <DrawerLeft />
                <a href="/" className="icons ml-3 p-1">
                    <div className="d-flex">
                    <img src={logo}  width="60%" alt="logo sextopy"/>
                    </div>
                </a>
        </div>
                <div className="navbar-right d-flex justify-content-end">
                    <div className="d-flex align-items-center">
                        <a href="#index" className="icons">
                            <ExitToAppIcon fontSize="large" className="icons d-none d-md-block mr-2" />
                        </a>
                       <DrawerRight/>
                                  
                    </div>
                </div>
        </section>
        </header>
    </Fragment>
      );
}
 
export default Nav;