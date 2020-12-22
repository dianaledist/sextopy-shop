import React, {Fragment} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import NavShopItem from '../NavShopItem/NavShopItem';

import './DrawerRight.scss';




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
      <List>
        {['Tu cesta del placer está vacía'].map((text, index) => (
          <Fragment>
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
          <div>🖤 </div>
          </Fragment>
        ))}
      </List>
    </div>
  );




  return (
    <Fragment>
        {['right'].map((anchor) => (
                <React.Fragment key={anchor} >
                <Button onClick={toggleDrawerRight(anchor, true)}><NavShopItem/> </Button>
                <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawerRight(anchor, false)}>
                    {listRight(anchor)}
                </Drawer>
                </React.Fragment>
            ))}
    </Fragment>
  );
}