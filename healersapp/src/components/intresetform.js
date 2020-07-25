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
import axios from "axios";

console.log($)
 // const useStyles = makeStyles((theme) => ({
//     margin: {
//       margin: theme.spacing(1),
//     },
//   }));
  class IntersetForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
          text: "",
          date: ""
      }
      // this.onSubmit = this.onSubmit.bind(this);
      // this.onChangeText = this.onChangeText.bind(this);
      this.handle = this.handle.bind(this)

    }


    handle(event){
    
  var user = {payment:$('#pay').val(),selected:$('#select').val(),feed:$('#feedback').val()}
  console.log($('#feedback').val())
      axios.post('http://localhost:8000/send', user)
          .then((res) => {
              console.log(res.data)

          }).catch((error) => {
              console.log(error)
          });

 

    
  }
  onChangeText(e) {
    this.setState({ text: e.target.value })
}
    render(){
    return (
        <div>
      <div >
        <FormControl >
          <span>How much you can pay?</span>
          <br />
          <Input  type='number'   
          id='pay'   
          />
        </FormControl>
        <div>
        <p>How do you want to pay?</p>
        <select id='select'>
        <option value="to the hospital directly">to the hospital directly</option>
        <option value="to the patient directly">to the patient directly</option>
        <option value="others">others</option>
      </select></div>
      <input hidden={true} id='others'/>
     <br />
     <br />
     <div >
     <p>please contact the patient with this phone number:- 0796776458</p>
    please give us feedback 
     <input id='feedback' />
     </div>
     <br />
      <Button variant="contained" color="primary"  onClick={this.handle}>
      Submit
    </Button>
      </div>
      </div>
    );
    }
  }

  export default IntersetForm;
//import React from 'react'
//const axios = require("axios");
