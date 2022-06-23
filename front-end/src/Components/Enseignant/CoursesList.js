import "../../styles/home.css";
import React,{useEffect,useState} from "react";
import { Container,Row,Col, Modal,Button } from "react-bootstrap";
import { FcDownload } from "react-icons/fc";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../Enseignant/Navbar';
import Footer from "../Footer";
import { AiOutlineDelete } from "react-icons/ai";
import axios from "axios";
import Signin from "../Signin";
import swal from "sweetalert";
import { createBrowserHistory } from "history";
import CoursModal from "./CoursModal";
const CoursList = () => {
const widow = "http://localhost:3000/";
const history = createBrowserHistory();
const [show, setShow] = useState(false);
const handleShow = () =>setShow(true);
const handleClose = () =>setShow(false)
const [cours,setCours] = useState([]);
 useEffect (() => {
  
       
        axios.post(`http://localhost/Portal/back-end/Courses/allCourses`)
        .then(result=>
            {
            setCours(result.data) 
       
            })
            .catch(err =>{
                console.log(err)
            })
          
    },[cours])

//     const deleteAssignment = (e,id) =>{
//         e.preventDefault();
//         console.log(id);
//     }
//     const DetailRendu=(e,id)=>{
//         e.preventDefault();
//         console.log(id)
//       navigate('/Rendus',{state:{idA:id}});
//   }


    //check if token is not expired
    var dateNow = new Date();
    const tokenTime = new Date(localStorage['expire']* 1000 )
    const tokenexpiration=tokenTime.getTime() - dateNow.getTime()


function Dele(id){
    axios.get(`http://localhost/Portal/back-end/Enseignant/deteteCours/${id}`)
        .then(Response=>{
            
         console.log(Response.data)
            swal("Success",Response.data.message);
        })
}





//secure the login
 if(typeof localStorage["teacherToken"] !== 'undefined' && tokenexpiration>0)
      {

    return ( 
        <div className="assignementContent">



                <Modal show={show}>
        <Modal.Header>
            <Modal.Title>
                New Cours
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <CoursModal />  
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
                    <h1 data-text="Courses">Courses</h1>
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
				
				<div><h4 className="project">Add new Cours +	</h4></div>
					</button>
				</div>
			</div>

            
			  <div className="CoursesHolder">
           
                <div className="holder">

                    {cours.map(courses=>(
                        <div className="cardCours" key={courses.coursId}>
                            <div className="cardBox">
                                 <div className='delete'><button onClick={() => Dele(courses.coursId)} className='deleteBtn'><AiOutlineDelete className='deleteIcon'/></button></div>
                                <div className="content">
                                    <div className="d-flex flex-row align-items-start author">
                                            <img className="rounded-circle" src={require(`../../uploads/${courses.Image}`)} width="40"/>
                                            <div className="username">{courses.Fname} {courses.Lname}</div>
                                    </div>
                                    <div className="subject"><span>Title :</span> {courses.title} .</div>
                                    <div className="subject"><span>Subject :</span> {courses.subject} .</div>
                                    <div className="subject"><span>Date :</span> {courses.postedAt} .</div>
                                    <div className="subject"><span>Description :</span> {courses.description} .</div>
                                    {/* note : to download file u have to move it to courses in public file */}
                                    <a href={`${widow+"courses/"}${courses.file}`} className="download" download={"courses/"+courses.file}><FcDownload className="fcIcon"/> Download</a>
                                </div>
                            </div>
                        </div> 
                    ))}             

           
			







				
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
 
export default CoursList;