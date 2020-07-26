
import React from 'react';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function FoodForm () {
  const classes = useStyles();

  return (
    <div>
    <div >
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" >
          About Us
        </Typography>
        <Button color="inherit" to="/createpost" component={Link}>create hospital bill Post</Button>
        <Button color="inherit" to="/profile" component={Link} >Profile</Button>
        <Button color="inherit" to="/" component={Link} >HomePage</Button>
        <Button >Logout</Button>
      </Toolbar>
    </AppBar>
    </div>
    <Grid
    container
    spacing={5}
    direction="column"
    alignItems="center"
    justify="center"
    style={{ minHeight: '100vh' }}
    >
    <Grid item xs={3}>
      <div >
    <form className={classes.root} noValidate autoComplete="off">
    <h1>Food Prescription Form </h1>
  
    <TextField id="standard-basic" label="Type of disease" /><br />
    
      <TextField id="standard-basic" label="Phone number" /><br />
   
      <TextField id="standard-basic" label="description of prescription" /><br />
      <br />
    upload an image<input type="file" id="img" name="img" accept="image/*" placeholder='upload an image'/><br />
   
      <Button variant="contained" color="primary" component={Link} to="/foodCategories">
      Submit
    </Button>
   
    </form>
    </div>
    </Grid> 
        </Grid>
        </div>
  );
}



