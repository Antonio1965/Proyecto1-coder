
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {Badge} from '@material-ui/core';
import logo from '../../img/logo/antonio1.svg';
import { ShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: '6rem',
  },
 appBar: {
     backgroudColor: 'black',
     boxShadow: 'none',
 },
  grow: {
    flexGrow: 1,
  },
  button:{
      backgroudColor:'azure',
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
  },
  image: {
      marginRight: '5px',
      height: '4rem',
  },
  
}));

export  function NavBar({title}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Link to='/'>
            <IconButton>
              <img
                className={classes.image}
                src={logo}
                height="30px"
                alt="logo"
              />
              <h1 className="nav-title">{title}</h1>
            </IconButton>
            </Link>
          <div className={classes.grow} />
          <Typography variant="h5" component="p">
            <strong>Hello : Guest</strong>
          </Typography>
          <Link to='/sign-in'>
          <div className={classes.button}>
            <Button  variant= 'outlined'>
           <span className='boton'>Sing In</span> 
            </Button>
          </div>
            </Link>
            <Link to='/cart'>
            <IconButton aria-label="show cart items" color="inherent">
              <Badge badgeContent={3} color="secondary">
                <ShoppingCart
                  fontSize="large"
                  className="carro"
                  color="azure"
                />
              </Badge>
            </IconButton>
            </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};