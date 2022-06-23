import { useState , useEffect} from "react";
import axios from "axios";
import swal from "sweetalert";
import { SiFiles } from "react-icons/si";
import { FcCancel } from "react-icons/fc";
import { FcCheckmark } from "react-icons/fc";
import { FcDownload } from "react-icons/fc";
import Signin from "../Signin";
import { createBrowserHistory } from "history";
const Rendu = ({id} ) => {

      const widow = "http://localhost:3000/";
      const history = createBrowserHistory();
      const [renduData, setRenduData] = useState({ rendu: [] ,length: null});
      const [file, setFile] = useState([]);
      const imagechangehandler = (e) =>{
        setFile({image:e.target.files[0]});
     }

     
     useEffect(()=>{
        function fetch(){
        axios.get(`http://localhost/Portal/back-end/Assignment/assignmentRendu/${id}`)
        .then(res=>{
            console.log(res)
            setRenduData({rendu:res.data,length:res.data.length})
   
        })
     }
     fetch();
     },[])
         

     //validate rendu
          function validate(e,id){
            e.preventDefault();
            axios.post(`http://localhost/Portal/back-end/Assignment/validate/${id}`)
             .then(Response=>{
            swal("Success",Response.data.message)
        })
        }


         //invalidation rendu
          function invalidate(e,id){
            e.preventDefault();
            axios.post(`http://localhost/Portal/back-end/Assignment/invalidate/${id}`)
             .then(Response=>{
            swal("Success",Response.data.message)
        })
        }

    
    //check if token is not expired
    var dateNow = new Date();
    const tokenTime = new Date(localStorage['expire']* 1000 )
    const tokenexpiration=tokenTime.getTime() - dateNow.getTime()



//secure the login


    return ( 
         <div className="card2  mt-3 p-3 g-2">
        <div className="d-flex align-items-center">
            <small className="second">Today at 1:30 pm</small>
        </div>
        <div className="mt-3">
            <h3 className="text2">Rendu</h3>
        </div>

        {/* check if there is rendu */}

        { renduData.length != 0 ?
        <div>
            {renduData.rendu.map(ren=>(
             <div className="detailR mt-5" key={ren.fileId}>
            <div className="px-1">
                <div className="rendu">
      

  



                    <div className="d-flex align-items-center w-100">
                        <small className="second">{ren.Fname} {ren.Lname}</small>
                    </div>

                    <div className="d-flex align-items-center">
                        <small className="second">{ren.posted_at}</small>
                    </div>
                    <div className="renduFile">
                        
                     <span><SiFiles /> {ren.file}</span>
                     <span> <a type="button" className="btns btn-light" href={`${widow+"Rendu/"}${ren.file}`} download={"Rendu/"+ren.file}>
                          <FcDownload />                       
                        </a></span>
                    </div>

                                   <div className="padding">
                     <div className="d-flex justify-content-end">
       
       
                        <button type="button" className="btns btn-light " onClick={(e)=>{validate(e,ren.fileId)}}>
                         < FcCheckmark />
                        </button>
                        <button type="button" className="btns btn-dark" onClick={(e)=>{invalidate(e,ren.fileId)}}>
                          <FcCancel />                       
                        </button>
                     </div>
                </div>
                </div>

            </div>
        </div>
    ))}
    </div>
        :
        <div className="no-rendu">No rendu</div>
        
        

 }

    </div>
     );


}
 
export default Rendu;