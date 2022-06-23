import { Navbar,Nav,Container,Button, Dropdown} from "react-bootstrap";
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../styles/navbar.css";
import logo from "../../imgs/logo_kankuro.png";
const Navigation = () => {
  const logOut = () => {
		localStorage.removeItem("adminToken");
		localStorage.removeItem("expire");
    localStorage.removeItem("adminId");
    localStorage.removeItem("Lname");
	}
  
  var sign = '';

    sign=<>
    <Dropdown className="nav-item dropdown no-arrow">
              <Dropdown.Toggle to="/" className="nav-link dropdown-toggle"  id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="mr-2 d-none d-lg-inline text-gray-600 small">{localStorage["Lname"]}</span>
                <img className="img-profile rounded-circle" src={logo} />
              </Dropdown.Toggle>
    
              <Dropdown.Menu className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                <Dropdown.Item to="/" className="dropdown-item">
                   Profile
                </Dropdown.Item>
                <Dropdown.Item className="dropdown-divider"></Dropdown.Item>
                 <Dropdown.Item onClick={logOut} className="dropdown-item" data-toggle="modal" data-target="#logoutModal">

                  Logout
                </Dropdown.Item>
             </Dropdown.Menu>
            </Dropdown> 
    </>
//   }

//secure the login





    return ( 
        <Navbar expand="lg" className="nav" sticky="top">
  <Container>
    <Navbar.Brand>
      <Link to="/">
      <img className="logo" alt="" src={logo} />
      </Link>
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto parent">
        <Nav.Link as={Link} to={"/List"}>Groups</Nav.Link>
        <Nav.Link as={Link} to={"/New"}>Registration</Nav.Link>
      </Nav>
    
      {sign}
       
    </Navbar.Collapse>
  </Container>
</Navbar>
     );
}
 
export default Navigation;