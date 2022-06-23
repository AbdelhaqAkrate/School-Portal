import Navigation from "./Navbar";
import '../styles/plans.css';
    import logo from "../imgs/vergil.jpg";
import Footer from "./Footer";

const Plan = () => {
    return ( 
        <div className="planContent">
           <Navigation /> 
            <div className="Plancontainer">
                <div className="schduleList">
                    <div className="planheader">
                    <h1>Time Schedule</h1>
                </div>
                <ul className="timeBlock">
                    <li className="timeArea">
                        
                                <span className="time">9 : 00 - 5 : 00</span>
                                <span className="language">arabe</span>
                        
                    </li>
                     <li className="timeArea">
                                <span className="time">9 : 00 - 5 : 00</span>
                                <span className="language">arabe</span>
                      
                    </li>
                        <li className="timeArea">
                                <span className="time">9 : 00 - 5 : 00</span>
                                <span className="language">arabe</span>
                      
                    </li>
                        <li className="timeArea">
                                <span className="time">9 : 00 - 5 : 00</span>
                                <span className="language">arabe</span>
                      
                    </li>
                        <li className="timeArea">
                                <span className="time">9 : 00 - 5 : 00</span>
                                <span className="language">arabe</span>
                      
                    </li>
                </ul>
                </div>

            </div>
  
           <Footer />
        </div>
     );
}
 
export default Plan;