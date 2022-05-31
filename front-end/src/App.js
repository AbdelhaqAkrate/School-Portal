import logo from './logo.svg';

import Navigation from './Components/Navbar';
import {Navigate} from "react-router-dom"
import Signin from './Components/Signin';
import Assignment from './Components/Assignment';
import Plan from './Components/Plans';
import Home from './Components/Home';
import NewStudent from './Components/Admin/AddStudents';
import StudentsList from './Components/Enseignant/Students';
import StudentProfil from './Components/studentProfile';
import AssignementDetails from './Components/AssignmentDetailes';
import Group from './Components/Admin/StudentList';
import axios from 'axios';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Assignment" element={<Assignment/>} />
          <Route path="/Plans" element={<Plan/>} />
          <Route path="/Signin" element={<Signin/>} />
          <Route path="/New" element={<NewStudent/>} />
          <Route path="/Students" element={<StudentsList/>} />
          <Route path="/profil" element={<StudentProfil/>} />
          <Route path="/Details" element={<AssignementDetails/>} />
           <Route path="/List" element={<Group/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>






     
    </div>
  );
}

export default App;
