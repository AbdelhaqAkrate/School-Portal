import Navigation from "./Navbar";
import '../styles/assignment.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer";
import Signin from "./Signin";
import { useState,useEffect } from "react";
import axios from "axios";
import { createBrowserHistory } from "history";
import {useNavigate} from 'react-router-dom';
const Assignment = (props) => {
const navigate = useNavigate();
    
     const details=(id,name)=>{
        navigate('/Details',{state:{id:id,name:name}});
  }
  const history = createBrowserHistory();
  const [assignment,setAssignment] = useState([]);


   useEffect (() => {
        axios.get(`http://localhost/Portal/back-end/Student/assignedAssignments/${localStorage["studentId"]}`)
        .then(result=>
            {
            setAssignment(result.data) 
         
            })
            .catch(err =>{
                console.log(err)
            })
    },[assignment])

const DetailAssignment=(e,id)=>{
        e.preventDefault();
      navigate('/Details',{state:{idA:id}});
  }



    //check if token is not expired
    var dateNow = new Date();
    const tokenTime = new Date(localStorage['expire']* 1000 )
    const tokenexpiration=tokenTime.getTime() - dateNow.getTime()


//secure the login
 if(typeof localStorage["studentToken"] !== 'undefined' && tokenexpiration>0)
      {

    return ( 
        <div className="assignementContent">
            <Navigation/>
              <div className="header">
                 <div className="custom-shape-divider-top-1654033706">
                     <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                    </svg>
                </div>
                <div className="title">
                    <h1 data-text="Assignment">Assignment</h1>
                </div>
                </div>
                 <div className="AssignmentHolder">
            <div className="main">
       
                    {assignment.map(assign=>(
                        <div className="cardTask" key={assign.assignmentId}>

                            <div className="shape beforeShape">

                                <div className="taskContent">
                                    <img src={require(`../uploads/${assign.Image}`)} className="imgfix rounded-circle"/>
                                    <h4>{assign.Fname} {assign.Lname}</h4>
                                    <h3>{assign.title}</h3>

                                </div>

                            </div>
                            
                            <div className="shape afterShape">

                                <div className="taskContent">
                                    <div className="break">
                                        <p>{assign.details}</p>
                                    </div>
                                    <span className="quote">Date : {assign.posted_at}</span>
                                    <button  onClick={(e)=>DetailAssignment(e,assign.assignmentId)}>Read More</button>
                                </div>

                            </div>

                        </div>
                    ))}
                      
            </div>
            </div>
            <Footer />
        </div>
     );
      }
      else{
   history.push('/');
   	localStorage.removeItem("studentToken");
	localStorage.removeItem("expire");
	localStorage.removeItem("studentId");
    localStorage.removeItem("pdp");
     return(
     <Signin />
   )
}
}
 
export default Assignment;