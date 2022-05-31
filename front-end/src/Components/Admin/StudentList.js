import'../../styles/groupStudents.css';
import Navigation from '../Navbar';
import Footer from '../Footer';
const StudentList = () => {
    return ( 
        <div className="studentsList">
            <Navigation />
            <div className="GroupStudents">
                <div className="holder">

                    <div class="cardStudent py-4">

                        <div class="d-flex justify-content-center align-items-center">
                            <div class="round-image">
                                <img src="https://i.imgur.com/Mn9kglf.jpg" class="rounded-circle" width="97" />
                            </div>
                        </div>

                        <div class="text-center">
                            <h4 class="mt-3">username</h4>
                            <span>Account Manager</span>

                            <div class="px-5">
                                <p class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                <button class="btn btn-primary follow">Follow Me</button>
                            </div>
                        </div>
            
                    </div>
                    

                      <div class="cardStudent py-4">

                        <div class="d-flex justify-content-center align-items-center">
                            <div class="round-image">
                                <img src="https://i.imgur.com/Mn9kglf.jpg" class="rounded-circle" width="97" />
                            </div>
                        </div>

                        <div class="text-center">
                            <h4 class="mt-3">username</h4>
                            <span>Account Manager</span>

                            <div class="px-5">
                                <p class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                <button class="btn btn-primary follow">Follow Me</button>
                            </div>
                        </div>
            
                    </div>


                      <div class="cardStudent py-4">

                        <div class="d-flex justify-content-center align-items-center">
                            <div class="round-image">
                                <img src="https://i.imgur.com/Mn9kglf.jpg" class="rounded-circle" width="97" />
                            </div>
                        </div>

                        <div class="text-center">
                            <h4 class="mt-3">username</h4>
                            <span>Account Manager</span>

                            <div class="px-5">
                                <p class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                <button class="btn btn-primary follow">Follow Me</button>
                            </div>
                        </div>
            
                    </div>
                      <div class="cardStudent py-4">

                        <div class="d-flex justify-content-center align-items-center">
                            <div class="round-image">
                                <img src="https://i.imgur.com/Mn9kglf.jpg" class="rounded-circle" width="97" />
                            </div>
                        </div>

                        <div class="text-center">
                            <h4 class="mt-3">username</h4>
                            <span>Account Manager</span>

                            <div class="px-5">
                                <p class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                <button class="btn btn-primary follow">Follow Me</button>
                            </div>
                        </div>
            
                    </div>
                </div>
          </div>
         <Footer />
        </div>
     );
}
 
export default StudentList;