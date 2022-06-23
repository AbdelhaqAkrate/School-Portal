import { Form,Button } from "react-bootstrap";
import { useState , useEffect } from "react";
import axios from "axios";
import '../../styles/Modal.css'
import swal from "sweetalert";
function AssignmentModal(){
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
     const [file, setFile] = useState([]);
    const [data,setData] = useState({
        title:'',
        details:'',
        context:'',
        posted_at : date,
        file: '',
        group:'',
    });
    


    const [group,setGroup] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost/Portal/back-end/Group/assignedGroup/${localStorage["teacherId"]}`)
        .then(result =>{
            setGroup(result.data)
        })
    },[])
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
         dataForm.append('context',data.context);
         dataForm.append('posted_at',data.posted_at);
         dataForm.append('file',file.image);
         dataForm.append('group',data.group);
         dataForm.append('teacher',localStorage["teacherId"]);
      
    console.log(data.posted_at)
    
      axios.post("http://localhost/Portal/back-end/Enseignant/addAssignment",dataForm)
        .then(Response=>{
          
            // console.log(Response.data.message);
            swal("Success",Response.data.message)
        })
    
   
}   



  //validate textarea counter
  function validate(){
    const areatextarea = document.querySelector("#textarea");
    const areatext = document.querySelector("#textarea").value.length;
    
    if(areatext > 750){
        areatextarea.classList.add("textarea_danger");
    }else{
        areatextarea.classList.remove("textarea_danger");
    }
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
              
                <div className="containerArea">
                  <div className="row">
                    <div className="col-md-12 d-flex justify-content-center">
                          <textarea id="textarea" name="context"
                            value = {data.context} 
                            onChange={inputchangehandler} 
                            onKeyUp={validate} 
                            className="form-control textarea" placeholder="Context...">
                          </textarea>
                    </div>
                  </div>
                </div>
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
            <Form.Group className="input">
                    <select className="form-control" name="group" value={data.group} onChange={inputchangehandler}>
                      <option >Select ...</option>
                        {group.map(grp => (
                            <option value={grp.groupId} key={grp.groupId} >{grp.title}</option>
                        ))}
                    </select>
            </Form.Group>
             <Form.Group className="d-flex justify-content-center">
                 <Button variant="success" type="submit" block>Save</Button>
             </Form.Group>
        
            
           
         </Form>

     );
}
 
export default AssignmentModal;