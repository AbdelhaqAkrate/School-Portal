import '../../styles/AssignmentList.css';
import Navigation from '../Enseignant/Navbar';
import { AiOutlineDelete } from "react-icons/ai";
import { Modal } from "react-bootstrap";
import Signin from '../Signin';
import AssignmentModal from './AssignmentModal';
import React, { useEffect, useState }  from "react";
import {useLocation} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { createBrowserHistory } from "history";
import { Navigate, useNavigate } from "react-router-dom";
import Footer from '../Footer';
import swal from 'sweetalert';
import axios from 'axios';
const AssignmentList = () => {
  const location = useLocation();
const [show, setShow] = useState(false);
const handleShow = () =>setShow(true);
const handleClose = () =>setShow(false)
const history = createBrowserHistory();
const [assignment,setAssignment] = useState([]);
 const navigate = useNavigate();
 useEffect (() => {
  
       { const data = new FormData();
         data.append('group', location.state.group);
        axios.post(`http://localhost/Portal/back-end/Assignment/groupAssignment/${localStorage["teacherId"]}`,data)
        .then(result=>
            {
            setAssignment(result.data) 
       
            })
            .catch(err =>{
                console.log(err)
            })}
          
    },[assignment])

    const deleteAssignment = (e,id) =>{
        e.preventDefault();
       axios.get(`http://localhost/Portal/back-end/Enseignant/deteteAssign/${id}`)
        .then(Response=>{
    
            swal("Success",Response.data.message);
        })
    }
    const DetailRendu=(e,id)=>{
        e.preventDefault();
        console.log(id)
      navigate('/Rendus',{state:{idA:id}});
  }


    //check if token is not expired
    var dateNow = new Date();
    const tokenTime = new Date(localStorage['expire']* 1000 )
    const tokenexpiration=tokenTime.getTime() - dateNow.getTime()








//secure the login
 if(typeof localStorage["teacherToken"] !== 'undefined' && tokenexpiration>0)
      {

    return ( 
        <div className="assignementContent">



                <Modal show={show}>
        <Modal.Header>
            <Modal.Title>
                New Assignment
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <AssignmentModal />  
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
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
			<div className="cardAssign">
				<div className="px-3 pb-4 text-center">
					<button className="newAssignment" onClick={()=>{handleShow()}}>
				<div><img src="https://img.icons8.com/bubbles/50/000000/blond-short-hair-lady-with-blue-glasses.png" width="15"  className="pic1" /><img src="https://img.icons8.com/bubbles/50/000000/girl-with-chemical-test-tube.png" width="22" className="pic2" /></div>
				<div><img src="https://img.icons8.com/bubbles/100/000000/girl-with-glasses-art-palette.png" width="65" /></div>
				<div><img src="https://img.icons8.com/bubbles/50/000000/short-curly-hair-girl-gem.png" width="16" className="pic3" /><img src="https://img.icons8.com/bubbles/50/000000/girl-and-playing-card.png" width="16" className="pic4" /></div>
				
				<div><h4 className="project">Add new Assignment +	</h4></div>
					</button>
				</div>
			</div>

            {assignment.map(assign=>(
			  <div className="cardTask" key={assign.assignmentId}>

                            <div className="shape beforeShape">
                            <div className='delete'><button onClick={(e)=>{deleteAssignment(e,assign.assignmentId)}} className='deleteBtn'><AiOutlineDelete className='deleteIcon'/></button></div>
                                <div className="taskContent">
                                    <img src={require(`../../uploads/${localStorage["pdp"]}`)} className="imgfix rounded-circle"/>
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
                                </div>
                                <div>
                                         <button className="btn-submit view"  onClick={(e)=>DetailRendu(e,assign.assignmentId)}>Read More</button>      
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
 
export default AssignmentList;