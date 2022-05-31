import "../styles/profil.css";
import Navigation from "./Navbar";
import logo from "../imgs/vergil.jpg";
const StudentProfil = () => {
    return ( 
        <div className="studentProfil">
          <Navigation />
            <header class="ScriptHeader">
                <div class="rt-container">
    	            <div class="col-rt-12">
        	            <div class="rt-heading">
            	            <h1>Student Profile Page </h1>
                        </div>
                    </div>
                </div>
            </header>
            <section>
    <div class="rt-container">
          <div class="col-rt-12">
              <div class="Scriptcontent">
              
<div class="student-profile py-4">
  <div class="container">
    <div class="row">
      <div class="col-lg-4">
        <div class="card shadow-sm">
          <div class="card-header bg-transparent text-center">
            <img class="profile_img" src={logo} alt="student dp" />
            <h3>Abdelhaq Akrate</h3>
          </div>
          <div class="card-body">
            <p class="mb-0"><strong class="pr-1">Student ID:</strong>1</p>
            <p class="mb-0"><strong class="pr-1">Group:</strong>1</p>
          </div>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="card shadow-sm">
          <div class="card-header bg-transparent border-0">
            <h3 class="mb-0"><i class="far fa-clone pr-1"></i>General Information</h3>
          </div>
          <div class="card-body pt-0">
            <table class="table table-bordered">
              <tbody><tr>
                <th style={{width: "30%"}}>Roll</th>
                <td style={{width: "3%"}}>:</td>
                <td>125</td>
              </tr>
              <tr>
                <th style={{width: "30%"}}>Academic Year	</th>
                <td style={{width: "3%"}}>:</td>
                <td>2020</td>
              </tr>
              <tr>
                <th style={{width: "30%"}}>Gender</th>
                <td style={{width: "3%"}}>:</td>
                <td>Male</td>
              </tr>
              <tr>
                <th style={{width: "30%"}}>Religion</th>
                <td style={{width: "3%"}}>:</td>
                <td>Group</td>
              </tr>
              <tr>
                <th style={{width: "30%"}}>blood</th>
                <td style={{width: "3%"}}>:</td>
                <td>B+</td>
              </tr>
            </tbody></table>
          </div>
        </div>
          <div style={{height: "26px"}}></div>
        <div class="card shadow-sm">
          <div class="card-header bg-transparent border-0">
            <h3 class="mb-0"><i class="far fa-clone pr-1"></i>Other Information</h3>
          </div>
          <div class="card-body pt-0">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

           
    		</div>
		</div>
    </div>
</section>
        </div>
     );
}
 
export default StudentProfil;