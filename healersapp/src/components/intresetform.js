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
console.log($)
 // const useStyles = makeStyles((theme) => ({
//     margin: {
//       margin: theme.spacing(1),
//     },
//   }));
  class IntersetForm extends Component {
    handle(event){
     console.log(event.target.value)
     if(event.target.value==='others'){
      $('#others').attr("hidden", false)
     }else if(event.target.value!=='others'){
        $('#others').attr("hidden", true)
     }
    }
    render(){
    return (
        <div>
      <div >
        <FormControl >
          <span>How much you can pay?</span>
          <br />
          <Input  type='number'          
          />
        </FormControl>
        <div>
        <p>How do you want to pay?</p>
        <select onChange={this.handle}>
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
     <input />
     </div>
     <br />
      <Button variant="contained" color="primary">
      Submit
    </Button>
      </div>
      </div>
    );
    }
  }

  export default IntersetForm;