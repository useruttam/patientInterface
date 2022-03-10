import React, { useState, Fragment } from "react";
import './App.css';
import pic from "./images/loginph.png";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {


  return (
    <div className="app container p-5">
    
    <br/>
    <center>
    <img src={pic}/>
    <br/>
    <center>
    <button id="fks" type="button" class="btn btn-secondary" onClick="#" >Username</button>
    <br/>
    <button id="fks" type="button" class="btn btn-secondary" onClick="#" >PID</button>
   </center>
    </center>
    <table>
    <tr>
    <td><button type="button" class="btn btn-primary">View Health Records</button> </td>
    <td><button type="button" class="btn btn-primary" style={{float:"right"}}>View Personal Info</button> </td>
    </tr>
    </table>
    
       </div>
  );
}