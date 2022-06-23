import { Form,Button } from "react-bootstrap";
import { useState , useEffect } from "react";
import axios from "axios";
import '../../styles/Modal.css'
import swal from "sweetalert";
function AccountModal({id}){



    const [data,setData] = useState({
        email:'',
        password:'',
        role:'',
        student : id
    });
    


    // const [group,setGroup] = useState([]);
    // useEffect(() => {
    //     axios.get(`http://localhost/Portal/back-end/Group/assignedGroup/${localStorage["teacherId"]}`)
    //     .then(result =>{
    //         setGroup(result.data)
    //     })
    // },[])
  const inputchangehandler = async (e) =>{
        setData({...data, [e.target.name]: e.target.value});
    }

   const add = async (e) => {
     e.preventDefault();
       const dataForm = new FormData();
         dataForm.append('email',data.email);
         dataForm.append('password',data.password);
         dataForm.append('role',data.role);
         dataForm.append('student',data.student)

   
      axios.post("http://localhost/Portal/back-end/Administrateur/createStudentAccount",dataForm)
        .then(Response=>{
          console.log(Response.data)
            swal("Success",Response.data.message)
        })
    
   
}   



  

    return ( 
         <Form onSubmit={add}>
              <Form.Group className="input">
                  <Form.Control
                    type="email"
                    placeholder="Email .."
                    value = {data.email} 
                    onChange={inputchangehandler}
                    name="email"
                    required
                />
              </Form.Group>
              <Form.Group className="input">
                 <Form.Control
                    type="text"
                    name="password"
                    placeholder="Password .."
                    value = {data.password} 
                    onChange={inputchangehandler}
                    required
                />
              </Form.Group>

 
            <Form.Group className="input">
                    <select className="form-control" name="role" value={data.role} onChange={inputchangehandler} required>
                      <option >Select ...</option>
                            <option value="student" >Student</option>
                            <option value="teacher" >Teacher</option>
                    </select>
            </Form.Group>
             <Form.Group className="d-flex justify-content-center">
                 <Button variant="success" type="submit" block>Save</Button>
             </Form.Group>
        
            
           
         </Form>

     );
}
 
export default AccountModal;