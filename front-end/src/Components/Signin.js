import "../styles/Signin.css";
import React,{useState} from "react";
import axios from "axios";
import {useNavigate } from "react-router-dom";
const Signin = () => {
        const navigate = useNavigate();
        const [data,setData] = useState({
        
        email:'',
        password:'',
        error:''
    });
    const [passwordErr , setPasswordErr] = useState('');
     const [emailErr , setEmailErr] = useState('');
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

         try {
        let response = await axios.post('http://localhost/Portal/back-end/Authentication/login',inputs);
        console.log(response)
        if(response.status === 200 && response.data.studentToken && response.data.expire){
            let jwt = response.data.studentToken;
            let expire = response.data.expire;
            let studentId = response.data.studentId;
            let pdp = response.data.pdp;
            localStorage.setItem("studentToken", jwt);
            localStorage.setItem("expire", expire);
            localStorage.setItem("studentId", studentId)
            localStorage.setItem("pdp", pdp)
            navigate('/Courses');
        }
        else if(response.status === 200 && response.data.teacherToken && response.data.expire){
            let jwt = response.data.teacherToken;
            console.log(jwt)
            let expire = response.data.expire;
            let teacherId = response.data.teacherId;
            let pdp = response.data.pdp;
            localStorage.setItem("teacherToken", jwt);
            localStorage.setItem("expire", expire);
            localStorage.setItem("teacherId", teacherId)
            localStorage.setItem("pdp", pdp)
            console.log(localStorage);
            navigate('/Groups');
        }
        else{
            setPasswordErr(response.data.passwordError);
            setEmailErr(response.data.emailError);
        }


    } catch(e){
        console.log(e);
        console.log("error")
    }
    }
    return ( 
        <div className="SignContent">
            <div className="containe">
                <div className="card">
                <div className="form">
                    <div className="left-side"> <span></span> <span></span> <span></span> <span></span> </div>
                    <div className="right-side">
                        <div className="signin_form s_form ">
                            <div className="login">
                
                                <h2>User Login</h2>
                               
                            </div>
                             
                             <form onSubmit={login}>
                            <div className="input_text"> <input type="email" placeholder="email" name="email" onChange={handleInput} value={data.email} /></div>
                            <span className="error">{emailErr}</span>
                            <div className="input_text"> <input className="signin_pass" type="password" name="password" placeholder="Password" onChange={handleInput} value={data.password} /></div>
                            <span>{passwordErr}</span>
                            <div className="login_btn"> <button className="login_button">LOGIN</button> </div>
                           </form>
                        </div>
                        <div className="signup_form s_form d-non">
                            <div className="login">
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