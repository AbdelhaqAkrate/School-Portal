import'../../styles/newStudent.css'
import Navigation from '../Admin/Navbar';
import axios from 'axios';
import swal from 'sweetalert';
import { useState, useEffect } from 'react';

const NewStudent = () => {

//get subjects list

    const [dat ,setDat] = useState({subject : [] ,group : []});
    useEffect(() => {
        function fetch()
        {
        const subject = axios.get(`http://localhost/Portal/back-end/Courses/getSubjects`)
        const group = axios.get("http://localhost/Portal/back-end/Group/groupsList");
        axios.all([subject, group]).then( axios.spread((...responses) => {
        const responseOne = responses[0]
        const responseTwo = responses[1]
        setDat({ subject: responseOne.data, group: responseTwo.data })
        console.log(dat)
    }))
}
fetch();
    },[])

//get data from inputs
    const [file, setFile] = useState([]);
    const [data,setData] = useState({
        fname:'',
        lname:'',
        birth:'',
        phone : '',
        image: '',
        tel:'',
        adresse: '',
        email : '',
        gender : '',
        subject : '',
        type : ''
    });
     const inputchangehandler = async (e) =>{
        setData({...data, [e.target.name]: e.target.value});
    }
     const imagechangehandler = (e) =>{
        setFile({image:e.target.files[0]});
     }
  

//add a new student methode using api's

    const newStudent = (e) => 
    {
        e.preventDefault();
         const dataForm = new FormData();
         dataForm.append('fname',data.fname);
         dataForm.append('lname',data.lname);
         dataForm.append('image',file.image);
         dataForm.append('birth',data.birth);
         dataForm.append('phone',data.tel);
         dataForm.append('email',data.email);
         dataForm.append('adresse',data.adresse);
         dataForm.append('gender',data.gender);
         dataForm.append('subject',data.subject);
         dataForm.append('class',data.subject);
         dataForm.append('type',data.type);
        axios.post("http://localhost/Portal/back-end/Administrateur/addNew", dataForm)
        .then(Response=>{
           
                console.log(Response.data)
                swal("SchoolGate",Response.data.message);
 
        })
      

    }


    return ( 
    <div className="registration">
        <Navigation />
        <div className="wrapper rounded bg-white">

        <div className="h3">Registration Form</div>

        <div className="form" enctype="multipart/form-data">
              <div className="row">
                 <div className="d-flex justify-content-center align_items-centercol-md-6 mt-md-0 mt-3 p-2">
                    <div className="d-flex align-items-center mt-2">
                        <label className="option">
                            <input type="radio" name="type" onChange={inputchangehandler} value ='Teacher' checked/>Teacher
                            <span className="checkmark"></span>
                        </label>
                        <label className="option ms-4">
                            <input type="radio" name="type" onChange={inputchangehandler} value ='Student' />Student
                            <span className="checkmark"></span>
                        </label>
                    </div>
                </div>
                <div className="col-md-12 mt-md-0 mt-3 end file-aria">
                    <div className="file-drop-area">
                        <span className="choose-file-button">Upload file</span>
                        <span className="file-message">or drag and drop it here</span>
                        <input className="file-input" name='image' type="file" multiple  onChange={imagechangehandler}/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                    <label>First Name</label>
                    <input type="text" className="form-control" name='fname' onChange={inputchangehandler} value ={data.fname} required />
                </div>
                <div className="col-md-6 mt-md-0 mt-3">
                    <label>Last Name</label>
                    <input type="text" className="form-control" name='lname' onChange={inputchangehandler} value ={data.lname} required />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                    <label>Birthday</label>
                    <input type="date" className="form-control" name='birth' onChange={inputchangehandler} value ={data.birth} required />
                </div>
                <div className="col-md-6 mt-md-0 mt-3">
                    <label>Gender</label>
                    <div className="d-flex align-items-center mt-2">
                        <label className="option">
                            <input type="radio" name="gender" onChange={inputchangehandler} value ='Male' checked/>Male
                            <span className="checkmark"></span>
                        </label>
                        <label className="option ms-4">
                            <input type="radio" name="gender" onChange={inputchangehandler} value ='Female' />Female
                            <span className="checkmark"></span>
                        </label>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                    <label>Email</label>
                    <input type="email" className="form-control" name='email' onChange={inputchangehandler} value ={data.email} required />
                </div>
                <div className="col-md-6 mt-md-0 mt-3">
                    <label>Phone Number</label>
                    <input type="tel" name='tel' onChange={inputchangehandler} value ={data.tel} className="form-control" required />
                </div>
            </div>
            <div className="row">
                <div >
                    <label>Adresse</label>
                    <textarea type="text" className="form-control" name='adresse' onChange={inputchangehandler} value ={data.adresse} required ></textarea>
                </div>
            </div>
            { data.type === "Teacher" &&
            <div className="row">
                 <div className="col-md-12 mt-md-0 mt-3">
                    <select className="form-control" disabled={data.type === "Student" || data.type===""} name="subject" value={data.subject} onChange={inputchangehandler}>
                    <option >Select ...</option>
                        {dat.subject.map(sub => (
                                <option value={sub.subjectId} key={sub.subjectId} >{sub.title}</option>
                        ))}
                    </select>
                </div>
            </div>
            }
              { data.type === "Student" &&
            <div className="row">
                 <div className="col-md-12 mt-md-0 mt-3">
                    <select className="form-control" disabled={data.type === "Teacher" || data.type===""} name="subject" value={data.subject} onChange={inputchangehandler}>
                    <option >Select ...</option>
                        {dat.group.map(sub => (
                                <option value={sub.class} key={sub.class} >{sub.title}</option>
                        ))}
                    </select>
                </div>
            </div>
            }
            <button className="btn btn-primary mt-3" onClick={newStudent}>Save</button>
        </div>

    </div>
</div>
     );
}
 
export default NewStudent;