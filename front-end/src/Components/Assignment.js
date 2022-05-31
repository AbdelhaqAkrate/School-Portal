import Navigation from "./Navbar";
import '../styles/assignment.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../imgs/vergil.jpg";
import Footer from "./Footer";
import {useNavigate} from 'react-router-dom';
const Assignment = (props) => {
const navigate = useNavigate();

     const details=(id,name)=>{
navigate('/Details',{state:{id:id,name:name}});
  }







    return ( 
        <div className="assignementContent">
            <Navigation/>
            <div class="main">

                       {/* Cards list  */}

                        <div class="two">
                            <div class="d-flex justify-content-end px-3 pt-1"><i class="mdi mdi-star-outline pr-1 star"></i><i class="mdi mdi-dots-horizontal dot"></i></div>
                            <div class="px-3"><div class="round "><img src={logo} width="23" class="imgfix rounded-circle"/></div></div>
                            <div class="px-3 pt-3">
                                <h3 class="name">username</h3>

                                <p class="quote2">Details of assignment.</p>
                            </div>
                            <div class="d-flex justify-content-start px-3 align-items-center">
                                <i class="mdi mdi-view-comfy task"></i>
                                <span class="quote2 pl-2">Task: what project</span>
                            </div>
                            <div class="d-flex justify-content-between  px-3 align-items-center pb-3">
                                <div class="d-flex justify-content-start align-items-center">
                                <i class="mdi mdi-calendar-clock date"></i>
                                <span class="quote2 pl-2">Date: due</span>
                            </div>
                            </div>
                              <div className="upload">
                            <div className="block">
                                <button className="download" onClick={()=>{details(12,"abdelhaq")}}> View More</button>
                            </div>  
                        </div>
			            </div>
                       
                        {/* end */}
                 
            </div>
            <Footer />
        </div>
     );
}
 
export default Assignment;