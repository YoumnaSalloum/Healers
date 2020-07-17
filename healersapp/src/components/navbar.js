//main page 
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HospitalBill from "./hospitalbill.js";
import HospitalForm from "./hosform.js";
import IntersetForm from "./intresetform.js";
import LogIn from "./login.js";
import SignUp from "./signup.js";

//navbar from material-ui
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
//complex buttons material ui 
import ButtonBase from '@material-ui/core/ButtonBase';

const images = [
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTRv7A2fktdfMsAvmbxqSKTgvrdGxfgKJxSpw&usqp=CAU',
    title: 'Hospital Bill Posts',
    width: '40%',
  }
  ]



const useStyles = makeStyles((theme) => ({
  rot: {
   display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
    justifyContent: 'center',
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
    image: {

    position: 'relative',
    height: 500,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));


function NavBar() {
  const classes = useStyles();
  return ( 
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            About Us
          </Typography>
          <Link to="/signup" variant="body2"> SignUp </Link>
          <Link to="/login" >Login</Link>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>

    <div className={classes.rot}>
      {images.map((image) => (
        <Link
        to="/hospitalbill"
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
            
                 {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </Link>
      ))}
      </div>
    </div>
  );
}

export default NavBar;
