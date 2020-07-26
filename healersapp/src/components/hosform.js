import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import $ from "jquery";
var axios = require("axios");
class BillForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      bill: null,
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleHospitalBillSchema = this.handleHospitalBillSchema.bind(this);
  }
  handleHospitalBillSchema() {

    var bill = {
      amount: $("#amount").val(),
      hospitalNumber: $("#hosNum").val(),
      hospitalName: $("#hosName").val(),
      hospitalAddress: $("#hosAdress").val(),
      descAboutHealthPatient: $("#healthDes").val(),
      feedBack: $("#feed").val(),
    };
    // $.post("http://localhost:8000/uploa", { myData: bill })
    //   .done(function () {
    //     alert("Request done!");
    //   })
    //   .fail(function (jqxhr, settings, ex) {
    //     alert("failed, " + ex);
    //   });
  }
  //lubna
  onFormSubmit(e) {
    var bill = {
      amount: $("#amount").val(),
      hospitalNumber: $("#hosNum").val(),
      hospitalName: $("#hosName").val(),
      hospitalAddress: $("#hosAdress").val(),
      descAboutHealthPatient: $("#healthDes").val(),
      patientNumber:$('#patNum').val(),
      feedBack: $("#feed").val(),
      id:localStorage.getItem('id')
    };
    console.log(bill);
    e.preventDefault();
    const formData = new FormData();
    formData.append("myImage", this.state.file);
    formData.append("Billdata", JSON.stringify(bill));
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios
      .post("http://localhost:8000/upload", formData, bill, config)
      .then((response) => {
        //alert("The file is successfully uploaded");
        console.log(response);
      })
      .catch((error) => {
        alert("error");
      });
  }
  onChange(e) {
    this.setState({ file: e.target.files[0] });
  }
  render() {
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
      <form onSubmit={this.onFormSubmit}>
        <h1>Hospital Bill Form </h1>
        Amount <input type="number" id="amount" />
        <br />
        Phone number of the hospital
        <TextField id="hosNum" />
        <br />
        phone number of patient
        <TextField id="patNum" />
        <br />
        the name of the hospital
        <TextField id="hosName" />
        <br />
        adress of the hospital
        <TextField id="hosAdress" />
        <br />
        <br />
        describtion about your health
        <TextField id="healthDes" />
        <br />
        <br />
        <input type="file" name="myImage" onChange={this.onChange} />
        <button   variant="contained"
          color="primary"
          type="submit" 
          onClick={this.onFormSubmit}
          >
         Submit
        </button>
        
       
        
        {/* <Button
          variant="contained"
          color="primary"
          onClick={this.handleHospitalBillSchema}
        >
          Submit
        </Button> */}
      </form>
      </Grid> 
        </Grid>
    );
  }
}
export default BillForm;
