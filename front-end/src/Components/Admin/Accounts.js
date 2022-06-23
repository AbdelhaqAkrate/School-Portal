import Navigation from "../Admin/Navbar";
import {useLocation} from 'react-router-dom';
import '../../styles/groupDetail.css';
import AdminSignin from '../Admin/Signin';
import { Modal } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { createBrowserHistory } from "history";
import Footer from "../Footer";
import { useEffect,useState } from "react";
import axios from "axios";
import AccountModal from "./AccountModal";
const Accounts = () => {
    const location = useLocation();
    const history = createBrowserHistory();
   const [students,setStudents]  = useState([]);
      const [studentId,setStudentId]  = useState('');
   const [show, setShow] = useState(false);
const handleShow = () =>setShow(true);
const handleClose = () =>setShow(false)
   	useEffect (() => {
        axios.get(`http://localhost/Portal/back-end/Student/withoutAccount/${location.state.group}`)
        .then(result=>
            {
            setStudents(result.data) 
            })
            .catch(err =>{
                console.log(err)
            })
    },[setStudents])

   function Get(id,handle)
    {
          setStudentId(id) 
    }





     //check if token is not expired
    var dateNow = new Date();
    const tokenTime = new Date(localStorage['expire']* 1000 )
    const tokenexpiration=tokenTime.getTime() - dateNow.getTime()

//secure the login
 if(typeof localStorage["adminToken"] !== 'undefined' && tokenexpiration>0)
 {
    return ( 
        <div className="groupDetails">


         <Modal show={show}>
        <Modal.Header>
            <Modal.Title>
                New Assignment
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <AccountModal id={studentId} />  
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>





              <Navigation />
            	 <div className="header">
                 <div className="custom-shape-divider-top-1654033706">
                     <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                    </svg>
                </div>
                <div className="title">
                    <h1>{location.state.tit}</h1>
                </div>
             </div>
            <div className="GDetails">
                <div className="holder">
<div className="page-content page-container" id="page-content">
   <div className="padding">
      <div s>
         <div className="gridCol">
           {students.map(std=>(
            <div className="list list-row block" key={std.studentId}>
               <div className="list-item" data-id="4">
                  <div><a href="#" data-abc="true"><span className="w-48 avatar gd-success"><img src={require(`../../uploads/${std.Image}`)} alt="." /></span></a></div>
                  <div className="flex ">
                     <div>{std.Fname+" "+std.Lname}</div>
                     <div className="item-except text-muted text-sm h-1x">{std.email}</div>
                     <div className="item-except text-muted text-sm h-1x">{std.Phone}</div>
                     <div className="item-except text-muted text-sm h-1x">{std.adresse}</div>
                  </div>
                  
               </div>
               <div className="no-wrap">
                     <button className="btn" onClick={()=>{ Get(std.studentId,handleShow);handleShow();}}>Create</button>
                  </div>
            </div>
         ))}
         </div>
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
   history.push('/admin');
   	localStorage.removeItem("adminId");
	localStorage.removeItem("expire");
	localStorage.removeItem("adminToken");
    localStorage.removeItem("Lname");
   return(
     <AdminSignin />
   )
}
}
 
export default Accounts;