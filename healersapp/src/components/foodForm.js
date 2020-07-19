
import React, { Component } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function FoodForm() {
  const classes = useStyles();

  return (
      <div >
    <form className={classes.root} noValidate autoComplete="off">
    
    <TextField id="standard-basic" label="Type of disease" /><br />
    
      <TextField id="standard-basic" label="Phone number" /><br />
   
      <TextField id="standard-basic" label="description of prescription" /><br />
    upload an image<input type="file" id="img" name="img" accept="image/*" placeholder='upload an image'/><br />
      <Button variant="contained" color="primary">
      Submit
    </Button>
    </form>
    </div>
  );
}



