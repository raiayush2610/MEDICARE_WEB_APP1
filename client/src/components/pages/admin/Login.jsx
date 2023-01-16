import React, { useState } from "react";
import Header from "../home/navbar";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import  Toast  from "../toast";
import ToastContainer from "../toastContai"
import 'react-toastify/dist/ReactToastify.css';
// this ois Admin login
function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
 

    const handleLogin = async(e) => {
       
        try {

            const res = await axios.post(`http://localhost:4000/admin/adminlogin`,{
                  username: email,
                  password: password                
                }
            )
            console.log(res.data);
            if(res.data === "no"){return Toast.error("This email  is not registered with us ")}

            if  (res.data ==="false") {return Toast.error("Password is Incorrect")} 

            else{
                if(res.data=== email){
                    console.log("Succefully");
                    
                }else{return Toast.error("Password is Incorrect")}}  
          
        } catch (error) {console.log(error);}
                
    }
  return (
    <>
       <div className="register">
        <Header />
        <ToastContainer position="bottom-center" limit={1}/>
            <form className="register-form">    
                <h1 className="h3 heading-h1 mb-3 mb-4 fw-normal">Login</h1>
                <input onChange={e => {setEmail(e.target.value)}} className="bottom" type="email" placeholder ="E-mail"/>
                {(email == null) ? <span>please enter the details</span> : <span></span>} 
                <input onChange={e => {setPassword(e.target.value)}} className="bottom" type="password" placeholder ="Password" autoComplete="false"/>
                <button onClick={e=>{handleLogin(e.preventDefault());}} className=" btn btn-lg btn-primary" id="login-button">Login </button> 
            </form>
            <p className="log-p">New to this website, <NavLink to = "/register">Register</NavLink></p>
            
        </div>
    </>
  )
}

export default Login
