import { Form,Button } from "react-bootstrap";
import { useState , useEffect } from "react";
import axios from "axios";
import '../../styles/Modal.css'
import swal from "sweetalert";
function CoursModal(){
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
     const [file, setFile] = useState([]);
    const [data,setData] = useState({
        title:'',
        details:'',
        context:'',
        posted_at : date,
        file: '',
    });
    



  const inputchangehandler = async (e) =>{
        setData({...data, [e.target.name]: e.target.value});
    }
  const imagechangehandler = (e) =>{
        setFile({image:e.target.files[0]});
     }
   const add = async (e) => {
     e.preventDefault();
       const dataForm = new FormData();
         dataForm.append('title',data.title);
         dataForm.append('details',data.details);
         dataForm.append('posted_at',data.posted_at);
         dataForm.append('file',file.image);
         dataForm.append('teacher',localStorage["teacherId"]);
    
    console.log(data.posted_at + data.file + data.details + data.title)
    console.log(file.image)
      axios.post("http://localhost/Portal/back-end/Enseignant/addCours",dataForm)
        .then(Response=>{
          
            // console.log(Response.data);
            swal("Success",Response.data.message)
        })
    
   
}   





    return ( 
         <Form onSubmit={add}>
              <Form.Group className="input">
                  <Form.Control
                    type="text"
                    placeholder="Title .."
                    value = {data.title} 
                    onChange={inputchangehandler}
                    name="title"
                    required
                />
              </Form.Group>
              <Form.Group className="input">
                 <Form.Control
                    type="text"
                    name="details"
                    placeholder="Details .."
                    value = {data.details} 
                    onChange={inputchangehandler}
                    required
                />
              </Form.Group>
            
             <Form.Group className="input">
                <Form.Control
                    type="file"
                    accept="*"
                    name='image' multiple  
                    onChange={imagechangehandler}
                    required
                />
            </Form.Group>
             <Form.Group className="d-flex justify-content-center">
                 <Button variant="success" type="submit" block>Save</Button>
             </Form.Group>
        
            
           
         </Form>

     );
}
 
export default CoursModal;