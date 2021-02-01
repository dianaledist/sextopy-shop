import React, {Fragment, useContext, useEffect} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import NavShopItem from '../NavShopItem/NavShopItem';
import {Link} from 'react-router-dom';

import './DrawerRight.scss';
import {Store} from '../../../store';
import CartList from './CartList/CartList';


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

    right: false,

  });



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
    </div>
  );


    const [data, setData]= useContext(Store);

  useEffect(() => {
   
    if(data.items.length){
        const productos=JSON.stringify([data.items, data.cantidad, data.precioTotal]);
        localStorage.setItem('productos', productos);
    }
  }, [data.items]);


  return (
    <Fragment>
        {['right'].map((anchor) => (
                <React.Fragment key={anchor} >
                <Button onClick={toggleDrawerRight(anchor, true)}><NavShopItem/> </Button>
                <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawerRight(anchor, false)}>
                    {listRight(anchor)}
                    <div className="Bellota-text">
                    <h5 className="Shrikhand">Tu cesta sextopy</h5>        
                      {
                        data.items.length ?

                        data.items.map((item,index)=>
                          <>                          
                        <CartList 
                        key={item.id} 
                        item={item} 
                        id={item.id}     
                        cantidad={item.quantity}                    
                        />
                      
                        
                        </>
                        )
                        :
                        <p>Cesta vacía</p>
                      }
                      </div>                      
                        <p className="Bellota-text text-right pr-2 font-weight-bold">Precio Total: $ {data.precioTotal}</p>
                        <button className="btn color-primario text-uppercase mt-3 Bellota-text" ><Link to='/cart' className="text-white" onClick={toggleDrawerRight(anchor, false)} >Ver Carrito</Link></button>
                        
                        <div className="text-center">🖤 </div>

                </Drawer>
                </React.Fragment>
            ))}
    </Fragment>
  );
}