//make sure that all components have the same name of routs
import React from 'react';
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/navbar.js';

import HospitalBill from "./components/hospitalbill.js";
import BillForm from "./components/hosform.js";
import IntersetForm from "./components/intresetform.js";
import Login from "./components/login.js";
import Signup from "./components/signup.js";


function App(){
  return (
    
     <Router>
     <br/> 
     <div>
     
     
     <Route path="/hospitalbill" exact component= {HospitalBill} />
     <Route path="/hosform" exact component= {BillForm} />
     <Route path="/IntersetForm" exact component= {IntersetForm} />
     <Route path="/Login" exact component= {Login} />
     <Route path="/" exact component= {NavBar} />
     <Route path="/Signup" exact component= {Signup} />
    
     </div>
     </Router>
     
  )
}

export default App;