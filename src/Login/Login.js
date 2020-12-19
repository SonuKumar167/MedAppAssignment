import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

import './Login.css';
import axios from "axios";

function Login(){
    const history = useHistory();
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");
    const [msg,setMsg] = useState("");
    const formDataEmail = (event) =>{
       setEmail(event.target.value);
    }
    const formDataPass = (event) =>{
        setPass(event.target.value);
    }
    // form submit function
    const onSubmit = (event) =>{
        event.preventDefault();
        const fdata = {"email":email, "pass":pass} ;
            async function sendFormData(){
                const data = await axios.get("http://localhost:6021/SignIn",{ params: fdata}); // sign api calling
                //console.log(data.data.data);
                const userData = data.data.data[0];
                if(data.data.status === 1){ 
                    sessionStorage.setItem("userID",userData.id);
                    sessionStorage.setItem("username",userData.username);
                    sessionStorage.setItem("email",userData.email); 
                    history.push("/Dashboard");
                }
                else{
                  setMsg(data.data.msg);
                }
            }
            sendFormData();     
    }
    return (
        <>
          <h1 className="login"> Welcome to MedApp</h1>
          <div className="container form_align">
              <h4 className="form_head">Sign in to special offer, health tips and more</h4>
              <p className="error"> {msg}</p>
              <form onSubmit={onSubmit}>
                   <div className="row">
                        <div className="col-sm-4"></div>
                        <div className="form-group col-sm-4">
                           <input type="email" className="form-control" id="email" value={email} placeholder="Enter email" name="email" onChange={formDataEmail} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4"></div>
                        <div className="form-group col-sm-4">
                           <input type="password" className="form-control" id="pwd" value={pass} placeholder="Enter password" name="pwd" onChange={formDataPass} />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-sm btn-default btn_login">Sign In</button> 
                </form>
               
            </div>
        </>
    );
}

export default Login;