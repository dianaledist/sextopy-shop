import React, {Fragment} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import './Drawer.scss';

import logo from '../../assets/images/sextopy_logo.svg';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import NavShopItem from '../NavShopItem/NavShopItem';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({

    left: false,
    right: false,

  });

  const toggleDrawerLeft = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawerLeft(anchor, false)}
      onKeyDown={toggleDrawerLeft(anchor, false)}
    >
      <List>
        {['Ropa íntima', 'Accesorios', 'Juguetes eróticos', 'Novedades'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    
    </div>
  );


  const toggleDrawerRight= (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const listRight = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawerRight(anchor, false)}
      onKeyDown={toggleDrawerRight(anchor, false)}
    >
      <List >
        {['Tu cesta del placer está vacía'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );




  return (
    <Fragment>
        <header className="container-fluid">
    <section className="navbar-section d-flex justify-content-between">
        <div className="navbar-menulogo d-flex align-items-center color-primario-solid">
            {['left'].map((anchor) => (
                <React.Fragment key={anchor} >
                <Button onClick={toggleDrawerLeft(anchor, true)}><MenuIcon fontSize="large"  className="text-white"/></Button>
                <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawerLeft(anchor, false)}>
                    {list(anchor)}
                </Drawer>
                </React.Fragment>
            ))}
                <a href="#index" className="icons ml-3 p-1">
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
                        {['right'].map((anchor) => (
                            <React.Fragment key={anchor} >
                            <Button onClick={toggleDrawerRight(anchor, true)}><NavShopItem/> </Button>
                            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawerRight(anchor, false)}>
                                {listRight(anchor)}
                            </Drawer>
                            </React.Fragment>
                        ))}
                                  
                    </div>
                </div>
    </section>
    </header>
    </Fragment>
  );
}