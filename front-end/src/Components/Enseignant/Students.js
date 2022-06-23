import Navigation from "../Enseignant/Navbar";
import Footer from "../Footer";
import '../../styles/absent.css';
import axios from "axios";
import Signin from "../Signin";
import { useEffect , useState } from "react";
import {useLocation} from 'react-router-dom';
import { FaEdit  } from "react-icons/fa";
import { MdFreeCancellation } from "react-icons/md";
import { Table , Button } from "react-bootstrap";
import { createBrowserHistory } from "history";
const StudentsList = () => {
        const history = createBrowserHistory();
    const [students, setStudent] = useState([]);
  const location = useLocation();
    useEffect (() => {
        axios.get(`http://localhost/Portal/back-end/Student/studentList/${location.state.group}`)
        .then(result=>
            {
            setStudent(result.data) 
            console.log(students)
            })
            .catch(err =>{
                console.log(err)
            })
    },[])

    //check if token is not expired
    var dateNow = new Date();
    const tokenTime = new Date(localStorage['expire']* 1000 )
    const tokenexpiration=tokenTime.getTime() - dateNow.getTime()

//secure the login
 if(typeof localStorage["teacherToken"] !== 'undefined' && tokenexpiration>0)
      {

    return ( 
        <div className="listContent" >
            <Navigation />
                <div className="title">
                    <h1 data-text="Attendance">Attendance</h1>
                </div>
            
            <div className="container table-responsive">
           {/* { message !== '' ? <div className="message">{message}</div> : null } */}
        
       <table className="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>                    
                    <th scope="col">Gender</th>                    
                    <th scope="col">birth</th>
                    <th scope="col">Hours</th>                  
                    <th  colspan="2">Status</th>                    
                </tr>
            </thead>
            <tbody>
                {students.map(std=>(
                <tr className="bg-blue" key={std.studentId}>            
                    <td className="pt-2 both">
                        <img className="picRow rounded-circle" src={require(`../../uploads/${std.Image}`)}  alt="" />
                        <div className="pl-lg-5 pl-md-3 pl-1 name">{std.Fname} {std.Lname}</div>
                    </td>                
                    <td className="pt-3 mt-1">{std.gender}</td>
                    <td className="pt-3">{std.birth}</td>
                    <td>
                        <input className="counter" type="number" min="0" max="2" name="hours" placeholder="0" />
                    </td>
                    <td className="pt-3"><button className="btn" >Absent</button></td>
                    <td className="pt-3"><button className="btn">Present</button></td>
                </tr>
              
                    ))}
            </tbody>
        </table>
      </div>
     <Footer />
        </div>
     );
      }
      else{
   history.push('/');
   	localStorage.removeItem("teacherId");
	localStorage.removeItem("expire");
	localStorage.removeItem("teacherToken");
    localStorage.removeItem("pdp");
   return(
     <Signin />
   )
}
}
 
export default StudentsList;