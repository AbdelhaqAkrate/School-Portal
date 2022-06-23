import { useState , useEffect} from "react";
import axios from "axios";
import swal from "sweetalert";
import { SiFiles } from "react-icons/si";
import Signin from "./Signin";
import { createBrowserHistory } from "history";
const Rendu = ({id} ) => {

      const history = createBrowserHistory();
      const [renduData, setRenduData] = useState({ rendu: [] ,length: null});
      const [file, setFile] = useState([]);
      const imagechangehandler = (e) =>{
        setFile({image:e.target.files[0]});
     }

     
     useEffect(()=>{
        function fetch(){
        const dataF = new FormData();
        dataF.append('assign',id)
        axios.post(`http://localhost/Portal/back-end/Assignment/getRendu/${localStorage["studentId"]}`,dataF)
        .then(res=>{
            console.log(res)
            setRenduData({rendu:res.data,length:res.data.length})
   
        })
     }
     fetch();
     },[])
        //validaet


     //send rendu
    function sent(e)
    {
        e.preventDefault();
        const data = new FormData();
        data.append('student',localStorage["studentId"]);
        data.append('assignment',id);
        data.append('file',file.image);
        axios.post("http://localhost/Portal/back-end/Student/sendRendu",data)
        .then(Response=>{
            swal("Success",Response.data.message)
        })
    }

    
    //check if token is not expired
    var dateNow = new Date();
    const tokenTime = new Date(localStorage['expire']* 1000 )
    const tokenexpiration=tokenTime.getTime() - dateNow.getTime()



//secure the login
 if(typeof localStorage["studentToken"] !== 'undefined' && tokenexpiration>0)
      {

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
             <div className="detail mt-5" key={ren.fileId}>
            <div className="px-1">
                <div className="rendu">

                    <div className="d-flex align-items-center">
                        <small className="second">{ren.Fname} {ren.Lname}</small>
                    </div>

                    <div className="d-flex align-items-center">
                        <small className="second">{ren.posted_at}</small>
                    </div>
                    <div className="renduFile">
                        <SiFiles />
                     <span> {ren.file}</span>
                    </div>
                    <div className="state">
                         {ren.state ===null &&
                    <span>No corrections</span>}
                    </div>
                     <div className="state">
                         {ren.state ===0 &&
                    <span>Invalid</span>}
                    </div>
                      <div className="state">
                         {ren.state ===1 &&
                    <span>Valide</span>}
                    </div>
                </div>

            </div>
        </div>
    ))}
    </div>
        :
        <div className="no-rendu">No rendu</div>
        
        

 }


        <div className="detail mt-5">
            <div className="px-1">
                 <div className="file-drop-area">
                        <span className="choose-file-button">Upload file</span>
                        <span className="file-message">or drag and drop it here</span>
                        <input className="file-input" name='image' type="file" multiple  onChange={imagechangehandler}/>
                    </div>

            </div>
        </div>
		<div className="mt-3 d-flex justify-content-end px-2">
            	<button className="btn-submit" onClick={sent}>Send  </button>
        	</div>
    </div>
     );
      }
      else{
    history.push('/');
   	localStorage.removeItem("studentToken");
	localStorage.removeItem("expire");
	localStorage.removeItem("studentId");
    localStorage.removeItem("pdp");
    
    return(
     <Signin />
   )
}
}
 
export default Rendu;