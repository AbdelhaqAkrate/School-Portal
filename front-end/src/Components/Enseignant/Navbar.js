import { Navbar,Nav,Container,Button, Dropdown} from "react-bootstrap";
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../styles/navbar.css";
import { useEffect , useState } from "react";
import logo from "../../imgs/logo_kankuro.png";
import axios from "axios";
const Navigation = () => {
  const [logInfo,setLogInfo] = useState([])
  const logOut = () => {
		localStorage.removeItem("teacherToken");
		localStorage.removeItem("expire");
    localStorage.removeItem("teacherId");
    localStorage.removeItem("pdp");
	}
  

  useEffect (() => {
        axios.get(`http://localhost/Portal/back-end/Enseignant/teacherInfo/${localStorage["teacherId"]}`)
        .then(result=>
            {
            // console.log(result.data)
            setLogInfo(result.data) 
            })
            .catch(err =>{
                console.log(err)
            })
    },[])



    return ( 
        <Navbar expand="lg" className="nav" sticky="top">
  <Container>
    <Navbar.Brand>
      <Link to="/">
      <img className="logo" alt="siteweb logo" src={logo} />
     
      </Link>
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto parent">
        <Nav.Link as={Link} to={"/Groups"}>Groups</Nav.Link>
        <Nav.Link as={Link} to={"/CoursesList"}>Courses</Nav.Link>
      </Nav>
    
       <Dropdown className="nav-item dropdown no-arrow">
              <Dropdown.Toggle to="/" classname="nav-link dropdown-toggle"  id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="mr-2 d-none d-lg-inline text-gray-600 small">{logInfo.Lname}</span>
  
                <img className="img-profile rounded-circle" alt="user pdp" src={require(`../../uploads/${localStorage.getItem("pdp")}`)} />
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                <Dropdown.Item as={Link} to={"/profil"} className="dropdown-item">
                  <i className="fa fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                  Profile
                </Dropdown.Item>
                <Dropdown.Item className="dropdown-divider"></Dropdown.Item>
                <Dropdown.Item onClick={logOut} className="dropdown-item" data-toggle="modal" data-target="#logoutModal">
                 <i className="fa fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                  Logout
                </Dropdown.Item>
             </Dropdown.Menu>
            </Dropdown> 
       
    </Navbar.Collapse>
  </Container>
</Navbar>

     );
}
 
export default Navigation;