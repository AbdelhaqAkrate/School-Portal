import {FaFacebookF,FaInstagram,FaTwitter} from "react-icons/fa";
import '../App.css'
const Footer = () => {
    return ( 
    <div className=" footer w-100" >
      
  <footer className="text-center text-lg-start" style={{backgroundColor: "#1F0C52"}}>
    <div className="container d-flex justify-content-center py-5">
      <button type="button" className="text-center btn btn-primary btn-floating mx-2 rounded-circle" style={{backgroundColor: "#3A4B68"}}>
       <FaFacebookF/>
      </button>
      <button type="button" className="btn btn-primary  btn-floating mx-2 rounded-circle" style={{backgroundColor: "#3A4B68"}}>
         <FaInstagram/>
      </button>
      <button type="button" className="btn btn-primary  btn-floating mx-2 rounded-circle" style={{backgroundColor: "#3A4B68"}}>
        <FaTwitter/>
      </button>
    </div>

   
    <div className="text-center text-black p-3" style={{backgroundColor: "#1A064E"}}>
      <a className="text-white text-decoration-none" href="http://localhost:3000/">@ 2021 -2022 Copyright</a>
    </div>
 
  </footer>
  
</div>
     );
}
 
export default Footer;