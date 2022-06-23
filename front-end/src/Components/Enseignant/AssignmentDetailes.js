import {useLocation} from 'react-router-dom';
import '../../styles/assignmentDetail.css';
import Navigation from '../Enseignant/Navbar';
import { useEffect,useState } from 'react';
import Footer from "../Footer";
import Signin from '../Signin';
import Rendu from './Rendu';
import { createBrowserHistory } from "history";
import axios from 'axios';
const Rendus = () => {
    const location = useLocation();
	   const [assign,setAssign] = useState([]);
	  const history = createBrowserHistory();
	useEffect (() => {
        axios.get(`http://localhost/Portal/back-end/Student/assignmentDetail/${location.state.idA}`)
        .then(result=>
            {
            setAssign(result.data) 
            })
            .catch(err =>{
                console.log(err)
            })
    },[assign])



 


    //check if token is not expired
    var dateNow = new Date();
    const tokenTime = new Date(localStorage['expire']* 1000 )
    const tokenexpiration=tokenTime.getTime() - dateNow.getTime()








//secure the login
 if(typeof localStorage["teacherToken"] !== 'undefined' && tokenexpiration>0)
      {

    return ( 
        <div className='HomeContent'>
           
			 <Navigation/>
                 <div className="header">
                 <div className="custom-shape-divider-top-1654033706">
                     <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                    </svg>
                </div>
                <div className="title">
                    <h1 data-text="Courses">Courses</h1>
                </div>
                </div>

			<div className="CourseHolder">
				<div className="holder">

					      <div className=" py-4 container  d-flex ">
    <div className="grid">
        <div className="g-col-8">
			
		<div className="card1 mt-3 p-3 g-2">
			<div className="d-flex align-items-center">
            <small className="first">{assign.posted_at}</small>
        	</div>
			<div className="mt-3">
            <h2 className="text1">{assign.title}</h2>
        </div>
			 
			<div className="d-flex flex-row align-items-start author">
                <div className="username">Assigned By : {assign.Fname} {assign.Lname}</div>
            </div>
			<div className="detail mt-5">
            	<small>{assign.context}</small>
        	</div>
			
		</div>
        </div>
        
         <div className="g-col-4">
        <Rendu id={location.state.idA} />
		
    
    </div>
    
    </div>
    
</div>


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
 
export default Rendus;