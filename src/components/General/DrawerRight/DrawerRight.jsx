import React, {Fragment, useContext} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import NavShopItem from '../NavShopItem/NavShopItem';
import CancelIcon from '@material-ui/icons/Cancel';
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

  const [data, setData]= useContext(Store);

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
     
        {/* <p>Tu cesta sextopy</p>
        
          {
            data.items.length ?

            data.items.map((item,index)=>
              <>
            <p key={index}>{item.nombre} - {data.itemsQuantity[index]}<CancelIcon onClick={ () => onRemove()}/></p>
            
            </>
            )
            :
            <p>Cesta vacía</p>
          }
          <Link to='/cart' ><button className="btn color-primario text-white btn-lg text-uppercase mt-3" >Ver Carrito</button></Link>
          <div className="text-center">🖤 </div> */}
        {/* {['Tu cesta'].map((text, index) => (
          <Fragment>
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
          {
            data.items.length ?
            data.items.map(items=>
              <>
            <p>{items.nombre}</p><button></button>
            </>
             )
            :
            <p>Cesta vacía</p>
          }
          <div className="text-center">🖤 </div>
          </Fragment>
        ))} */}
      
    </div>
  );

  const onDelete = () => {	
    setData({
      items: [],
      cantidad: 0,
      precioTotal: 0,
    })
  }




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
                        {/* <p>Precio Total: {data.precioTotal}</p> */}
                        <button className="btn color-primario text-uppercase mt-3 Bellota-text" ><Link to='/cart' className="text-white" onClick={toggleDrawerRight(anchor, false)} >Ver Carrito</Link></button>
                        <button className="btn btn-secondary text-white Bellota-text text-uppercase mt-3" onClick={ () => onDelete()}>Vaciar</button>
                        
                        <div className="text-center">🖤 </div>

                </Drawer>
                </React.Fragment>
            ))}
    </Fragment>
  );
}