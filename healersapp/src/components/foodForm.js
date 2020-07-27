
import React, { Component } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";

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
      <Button variant="contained" color="primary">
      Submit
    </Button>
    </form>
    </div>
    </Grid> 
        </Grid>
  );
}



