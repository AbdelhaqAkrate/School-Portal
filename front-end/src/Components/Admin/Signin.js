import "../../styles/Signin.css";
import React,{useState} from "react";
import axios from "axios";
import {useNavigate } from "react-router-dom";
const AdminSignin = () => {
        
        const navigate = useNavigate();
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

         try {
        let response = await axios.post('http://localhost/Portal/back-end/Administrateur/login',inputs);
        console.log(response)
        if(response.status === 200 && response.data.adminToken && response.data.expire){
            let jwt = response.data.adminToken;
            let expire = response.data.expire;
            let adminId = response.data.adminId;
            let Lname = response.data.Lname;
            localStorage.setItem("adminToken", jwt);
            localStorage.setItem("expire", expire);
            localStorage.setItem("adminId", adminId);
            localStorage.setItem("Lname", Lname);
            console.log(localStorage["expire"]);
            navigate('/List');
        }
        else{
          
            navigate('/admin');
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
                    <div className="left-sideAdmin"> <span></span> <span></span> <span></span> <span></span> </div>
                    <div className="right-side">
                        <div className="signin_form s_form ">
                            <div className="login">
                                <img src="{" alt="" srcset="" />
                                <h2>Admin Login</h2>
                               
                            </div>
                             <div className="error">{data.error}</div>
                             <form onSubmit={login}>
                            <div className="input_text"> <input type="email" placeholder="email" name="email" onChange={handleInput} value={data.email} /> <span>{data.messages.email}</span></div>
                            <div className="input_text"> <input className="signin_pass" type="password" name="password" placeholder="Password" onChange={handleInput} value={data.password} /><span>{data.messages.password}</span> </div>
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
 
export default AdminSignin;