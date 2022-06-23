import'../../styles/groupStudents.css';
import Navigation from '../Enseignant/Navbar';
import Footer from '../Footer';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { createBrowserHistory } from "history";
import Signin from '../Signin';
import logo from '../../imgs/logo_kankuro.png';
const GroupsList = () => {
 const navigate = useNavigate();
const [group ,setGroup] = useState([]);
const history = createBrowserHistory();

      //fetch data
      useEffect (() => {
        axios.get(`http://localhost/Portal/back-end/Group/assignedGroupDetail/${localStorage["teacherId"]}`)
        .then(result=>
            {
            setGroup(result.data) 
            })
            .catch(err =>{
                console.log(err)
            })
    },[group])


    //navigate to group students list
      const toGroup=(e,id,name)=>{
        e.preventDefault();
        console.log(id)
      navigate('/AssignmentList',{state:{group:id ,title:name}});
  }

    //navigate to Attendance students list
      const toAttendance=(e,id)=>{
        e.preventDefault();
        console.log(id)
      navigate('/attendance',{state:{group:id}});
  }

 //check if token is not expired
    var dateNow = new Date();
    const tokenTime = new Date(localStorage['expire']* 1000 )
    const tokenexpiration=tokenTime.getTime() - dateNow.getTime()

//secure the login
 if(typeof localStorage["teacherToken"] !== 'undefined' && tokenexpiration>0)
 {


    //Template
    return ( 
        <div className="studentsList">
            <Navigation />
            	 <div className="header">
                 <div className="custom-shape-divider-top-1654033706">
                     <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                    </svg>
                </div>
                <div className="title">
                    <h1 data-text="Groups">Groups</h1>
                </div>
             </div>
            <div className="GroupStudents">
                <div className="holder">

                {group.map(gup=>(
                    <div className="cardStudent py-4" key={gup.class}>
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="round-image">
                                <img src={logo} alt="website logo" />
                            </div>
                        </div>
                        <div className="text-center">
                            <h4 className="mt-3">{gup.title}</h4>

                            <div className="px-5">
                                <p className="content">N° Students : {gup.Nb_students}</p>
                            </div>
                            <div className='d-flex justify-content-evenly'>
                                <button className="btn btn-primary follow"  onClick={(e)=>toGroup(e,gup.class,gup.title)}>Details</button>
                                <button className="btn btn-primary follow"  onClick={(e)=>toAttendance(e,gup.class)}>Attendance</button>
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
   	localStorage.removeItem("teacherToken");
	localStorage.removeItem("expire");
	localStorage.removeItem("teacherId");
    localStorage.removeItem("pdp");
   return(
     <Signin />
   )
}
}
 
export default GroupsList;