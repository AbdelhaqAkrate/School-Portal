import Navigation from "./Navbar";
import '../styles/plans.css';
    import logo from "../imgs/vergil.jpg";
import Footer from "./Footer";

const Plan = () => {
    return ( 
        <div className="planContent">
           <Navigation /> 
            <div class="Plancontainer">
	<div class="row">
		<div class="col-lg-3 col-sm-6">

            <div class="card hovercard">
                <div class="cardheader">

                </div>
                <div class="avatar">
                    <img alt="" src={logo} />
                </div>
                <div class="info">
                    <div class="userPrf">
                        <a target="_blank" href="https://scripteden.com/">name</a>
                    </div>
                    <div class="desc">Group</div>
                    <div class="desc">info personel</div>
                    <div class="desc">date</div>
                </div>
            </div>

        </div>

	</div>
</div>
  
           <Footer />
        </div>
     );
}
 
export default Plan;