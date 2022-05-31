import {FaFacebookF,FaInstagram,FaTwitter} from "react-icons/fa";
import '../App.css'
const Footer = () => {
    return ( 
    <div class=" footer w-100" >
      
  <footer class="text-center text-lg-start" style={{backgroundColor: "#1F0C52"}}>
    <div class="container d-flex justify-content-center py-5">
      <button type="button" class="text-center btn btn-primary btn-floating mx-2 rounded-circle" style={{backgroundColor: "#3A4B68"}}>
       <FaFacebookF/>
      </button>
      <button type="button" class="btn btn-primary  btn-floating mx-2 rounded-circle" style={{backgroundColor: "#3A4B68"}}>
         <FaInstagram/>
      </button>
      <button type="button" class="btn btn-primary  btn-floating mx-2 rounded-circle" style={{backgroundColor: "#3A4B68"}}>
        <FaTwitter/>
      </button>
    </div>

   
    <div class="text-center text-black p-3" style={{backgroundColor: "#1A064E"}}>
      <a class="text-white text-decoration-none" href="http://localhost:3000/">@ 2021 -2022 Copyright</a>
    </div>
 
  </footer>
  
</div>
     );
}
 
export default Footer;