import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import $ from 'jquery'

class BillForm extends Component {



    render(){
        return(
            <div >
          <form>
          Amount <input  type='number' />
          <br />
          Phone number of the hospital<TextField  />
          <br />
          phone number of patient<TextField  />
          <br />
          the name of the hospital<TextField  />
          <br />
          adress of the hospital<TextField  />
          <br />
          upload an image<input type="file" id="img" name="img" accept="image/*" placeholder='upload an image'/>
          <br />
          describtion about your health<TextField  />
          <br />
          please give us feedback<TextField  />
          <br />
            <Button variant="contained" color="primary">
            Submit
          </Button>
          </form>
            </div>
          
        )
    }
}



export default BillForm;