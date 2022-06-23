import "../styles/home.css";
import React,{useEffect,useState} from "react";
import { Container,Row,Col, Modal,Button } from "react-bootstrap";
import { FcDownload } from "react-icons/fc";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navbar';
import Footer from "./Footer";
import axios from "axios";
import Signin from "./Signin";
import { createBrowserHistory } from "history";

const Home = () => {
    // const widow = window.location.href;
    const widow = "http://localhost:3000/";
    const [cours, setCours] = useState([]);
    const history = createBrowserHistory();
    //fectch data
      useEffect (() => {
        axios.get(`http://localhost/Portal/back-end/Courses/getCourses/${localStorage["studentId"]}`)
        .then(result=>
            {
            setCours(result.data) 
            })
    },[cours])

    //check if token is not expired
    var dateNow = new Date();
    const tokenTime = new Date(localStorage['expire']* 1000 )
    const tokenexpiration=tokenTime.getTime() - dateNow.getTime()








//secure the login
 if(typeof localStorage["studentToken"] !== 'undefined' && tokenexpiration>0)
      {

   
    return ( 
        <div className="HomeContent">
        
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

               


            <div className="CoursesHolder">
           
                <div className="holder">

                    {cours.map(courses=>(
                        <div className="cardCours" key={courses.coursId}>
                            <div className="cardBox">
                                <div className="content">
                                    <div className="d-flex flex-row align-items-start author">
                                            <img className="rounded-circle" src={require(`../uploads/${courses.Image}`)} width="40"/>
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
 
export default Home;