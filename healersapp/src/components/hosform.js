import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';
import $ from 'jquery'

class BillForm extends Component {
    handleHospitalBillSchema(){      
        var bill = {amount:$('#amount').val(),hospitalNumber:$('#hosNum').val(),hospitalName:$('#hosName').val(),
        hospitalAddress:$('#hosAdress').val(),descAboutHealthPatient:$('#healthDes').val(),feedBack:$('#feed').val()
       
    }
    $.post('http://localhost:8000/bill',
    { myData: bill })
    .done(function () { alert('Request done!'); })
    .fail(function (jqxhr, settings, ex) { alert('failed, ' + ex); });
    
    }

    render(){
        return(
            <div >
          <form>
          Amount <input  type='number' id='amount' />
          <br />
          Phone number of the hospital<TextField id='hosNum' />
          <br />
          phone number of patient<TextField id='patNum'  />
          <br />
          the name of the hospital<TextField id='hosName'  />
          <br />
          adress of the hospital<TextField id='hosAdress' />
          <br />
          upload an image<input type="file" id="img" name="img" accept="image/*" placeholder='upload an image'/>
          <br />
          describtion about your health<TextField id='healthDes'  />
          <br />
          please give us feedback<TextField id="feed" />
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