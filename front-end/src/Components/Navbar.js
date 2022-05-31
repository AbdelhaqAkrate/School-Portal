import { Navbar,Nav,Container,Button, Dropdown} from "react-bootstrap";
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/navbar.css";
import logo from "../imgs/vergil.jpg";
const Navigation = () => {
  const logOut = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("username");
	}
  
  var sign = '';
  // if(!localStorage.getItem('token'))
  // {
  //   sign = 
  //     <>
  //         <Nav.Link as={Link} to={"/Signin"} >
  //       <Button variant="danger">
  //           Signin 
  //       </Button>
  //       </Nav.Link>
        
  //     </>
    
  // }
  // else{
    sign=<>
   
    </>
  // }




    return ( 
        <Navbar expand="lg" className="nav" sticky="top">
  <Container>
    <Navbar.Brand>
      <Link to="/">
      <img className="logo rounded-circle" alt="" src={logo} />
      </Link>
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto parent">
        <Nav.Link as={Link} to={"/"}>Courses</Nav.Link>
        <Nav.Link as={Link} to={"/Assignment"}>Assignments</Nav.Link>
        <Nav.Link as={Link} to={"/Plans"}>Plans</Nav.Link>
        <Nav.Link as={Link} to={"/Signin"}>Tasks</Nav.Link>
      </Nav>
    
       <Dropdown class="nav-item dropdown no-arrow">
              <Dropdown.Toggle to="/" classname="nav-link dropdown-toggle"  id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="mr-2 d-none d-lg-inline text-gray-600 small">Abdelhaq</span>
                <img className="img-profile rounded-circle" src={logo} />
              </Dropdown.Toggle>
    
              <Dropdown.Menu class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                <Dropdown.Item as={Link} to={"/profil"} className="dropdown-item">
                  <i class="fa fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                  Profile
                </Dropdown.Item>
                <Dropdown.Item class="dropdown-divider"></Dropdown.Item>
                <Dropdown.Item as={Link} to={"/Signin"} className="dropdown-item" data-toggle="modal" data-target="#logoutModal">
                 <i class="fa fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
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