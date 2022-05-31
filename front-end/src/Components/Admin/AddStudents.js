import'../../styles/newStudent.css'
import Navigation from '../Navbar';

const NewStudent = () => {
    return ( 
    <div className="registration">
        <Navigation />
        <div class="wrapper rounded bg-white">

        <div class="h3">Registration Form</div>

        <div class="form">
              <div class="row">
                <div class="col-md-6 mt-md-0 mt-3 end">
                    <img className='pdp rounded-circle' src={require("../../imgs/vergil.jpg")} alt="" />
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 mt-md-0 mt-3">
                    <label>First Name</label>
                    <input type="text" class="form-control" required />
                </div>
                <div class="col-md-6 mt-md-0 mt-3">
                    <label>Last Name</label>
                    <input type="text" class="form-control" required />
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 mt-md-0 mt-3">
                    <label>Birthday</label>
                    <input type="date" class="form-control" required />
                </div>
                <div class="col-md-6 mt-md-0 mt-3">
                    <label>Gender</label>
                    <div class="d-flex align-items-center mt-2">
                        <label class="option">
                            <input type="radio" name="radio" />Male
                            <span class="checkmark"></span>
                        </label>
                        <label class="option ms-4">
                            <input type="radio" name="radio" />Female
                            <span class="checkmark"></span>
                        </label>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 mt-md-0 mt-3">
                    <label>Email</label>
                    <input type="email" class="form-control" required />
                </div>
                <div class="col-md-6 mt-md-0 mt-3">
                    <label>Phone Number</label>
                    <input type="tel" class="form-control" required />
                </div>
            </div>
            <div class=" my-md-2 my-3">
                <label>Role</label>
                <select id="sub" required>
                    <option value="" selected hidden>Choose Option</option>
                    <option value="Maths">Teacher</option>
                    <option value="Science">Student</option>
                </select>
            </div>
            <div class="btn btn-primary mt-3">Submit</div>
        </div>

    </div>
</div>
     );
}
 
export default NewStudent;