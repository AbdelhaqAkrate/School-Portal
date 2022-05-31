import "../styles/Signin.css";
import Navigation from "./Navbar";
import React,{useState} from "react";
import {Link} from 'react-router-dom';
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
const Signin = () => {
        const navigate = useNavigate();
         const [redirect,setRedirect] = useState(false)
    const [data,setData] = useState({
        
        email:'',
        password:'',
        messages:[],
        error:''
    });
     const handleInput = (e) =>{
        setData({...data,[e.target.name]: e.target.value});
    }
    const login = async (e) =>
    {
           e.preventDefault();
           const inputs ={
            email: data.email,
            password: data.password,
        }
        console.log(inputs);

         try {
        let response = await axios.post('http://localhost/Portal/back-end/Authentication/login',inputs);
            console.log(response.data)
        if(response.status === 200 && response.data.studentToken && response.data.expire){
            let jwt = response.data.studentToken;
            console.log(jwt)
            let expire = response.data.expire;
            let studentId = response.data.studentId;
            setRedirect(true);
            localStorage.setItem("studentToken", jwt);
            localStorage.setItem("expire", expire);
            localStorage.setItem("studentId", studentId)
            console.log(localStorage);
            navigate('/Home');
        }
        else if(response.status === 200 && response.data.teacherToken && response.data.expire){
            let jwt = response.data.studentToken;
            console.log(jwt)
            let expire = response.data.expire;
            let teacherId = response.data.teacherId;
            setRedirect(true);
            localStorage.setItem("teacherToken", jwt);
            localStorage.setItem("expire", expire);
            localStorage.setItem("studentId", teacherId)
            console.log(localStorage);
            navigate('/students');
        }
        else{
            navigate('/');
        }


    } catch(e){
        console.log(e);
        console.log("error")
    }
    }
    return ( 
        <div className="SignContent">
              <Navigation />
            <div class="containe">
                <div class="card">
                <div class="form">
                    <div class="left-side"> <span></span> <span></span> <span></span> <span></span> </div>
                    <div class="right-side">
                        <div class="signin_form s_form ">
                            <div class="login">
                                <h2>User Login</h2>
                               
                            </div>
                             <div className="error">{data.error}</div>
                             <form onSubmit={login}>
                            <div class="input_text"> <input type="email" placeholder="email" name="email" onChange={handleInput} value={data.email} /> <span>{data.messages.email}</span></div>
                            <div class="input_text"> <input class="signin_pass" type="password" name="password" placeholder="Password" onChange={handleInput} value={data.password} /> <i class="fa fa-lock"></i> <i class="fa fa-eye-slash"></i><span>{data.messages.password}</span> </div>
                            <div class="login_btn"> <button class="login_button">LOGIN</button> </div>
                           </form>
                        </div>
                        <div class="signup_form s_form d-non">
                            <div class="login">
                                <h2>Create Account</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default Signin;