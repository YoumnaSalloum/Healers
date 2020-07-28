import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";

// const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//     },
//     menuButton: {
//       marginRight: theme.spacing(2),
//     },
//     title: {
//       flexGrow: 1,
//     },
//   }));
   
  

  export default class Profile extends Component {
  // constructor(props) {
  //   super(props);
  //   this.onChangeemail = this.onChangeemail.bind(this);
  //   this.onChangefirstName = this.onChangefirstName.bind(this);
  //   this.onChangelastName = this.onChangelastName.bind(this);
  //   this.onChangepassword = this.onChangepassword.bind(this);
  //   this.onSubmit = this.onSubmit.bind(this);

  //   this.state = {
  //     email: "",
  //     password: "",
  //     firstName: "",
  //     lastName: "",
  //   };
  // }
    render () {
    return(
      
        <div>
        <div >
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" >
              About Us
            </Typography>
            <Button  color="inherit" to="/foodform" component={Link}>create Food Post</Button>
            <Button color="inherit" to="/createpost" component={Link}>create hospital bill Post</Button>
            <Button color="inherit" to="/" component={Link} >HomePage</Button>
            <Button >Logout</Button>
          </Toolbar>
        </AppBar>
        </div>
        <div style={{maxWidth:"550px", margin:"0px auto"}}>
            <div style={{
                display:"flex",
                justifyContent:"space-around",
                margin:"18px 0px",
                borderBottom:"1px solid grey"
            }}>
                <div>
                    <img style={{width:"160px",height:"160px",borderRadius:"80px"}}
                     src="https://lh3.googleusercontent.com/proxy/lerz6YHZ5j9e6kjQ41Wktz9qHC77Yu0lFWJGkvwJB6aCDU5IZb4Rs8eKwryQTLYr7_0FcRMjithLHNG7EKtOEknXByX_MlAcqIRysCGbeMsjLGeAMKs"
                    />
                </div>
                <div>
                <h4>RBK cohort8</h4>
                <div style={{display:"flex",justifyContent:"space-between",width:"108%"}}>
                    <h6>40 posts</h6>
                    <h6>40 followers</h6>
                    <h6>40 following</h6>
                </div>
                </div>
            </div>
          <div style={{
               display: "flex",
               flexWrap: "wrap",
               justifyContent: "space-around",
          }}>
           <img className="item" src="https://lh3.googleusercontent.com/proxy/lerz6YHZ5j9e6kjQ41Wktz9qHC77Yu0lFWJGkvwJB6aCDU5IZb4Rs8eKwryQTLYr7_0FcRMjithLHNG7EKtOEknXByX_MlAcqIRysCGbeMsjLGeAMKs "/>
       
          </div>
        </div>
        </div>
    )
}
//////////
  }
