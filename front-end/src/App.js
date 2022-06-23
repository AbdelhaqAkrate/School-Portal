import logo from './logo.svg';
import { useEffect } from "react";
import Navigation from './Components/Navbar';
import {Navigate} from "react-router-dom"
import Signin from './Components/Signin';
import Assignment from './Components/Assignment';
import Plan from './Components/Plans';
import Home from './Components/Home';
import CoursList from './Components/Enseignant/CoursesList';
import NewStudent from './Components/Admin/AddStudents';
import StudentsList from './Components/Enseignant/Students';
import StudentProfil from './Components/studentProfile';
import AssignementDetails from './Components/AssignmentDetailes';
import AssignmentList from './Components/Enseignant/AssignmentList';
import Group from './Components/Admin/StudentList';
import GroupsList from './Components/Enseignant/GroupsList';
import GroupDetails from './Components/Admin/GroupDetails';
import AdminSignin from './Components/Admin/Signin';
import Rendus from './Components/Enseignant/AssignmentDetailes';
import Accounts from './Components/Admin/Accounts';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
function App() {


 useEffect(() => {
    
    document.title = "SchoolGate";
  }, []);

  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path="/Courses" element={<Home/>} />
          <Route path="/Assignment" element={<Assignment/>} />
          <Route path="/Plans" element={<Plan/>} />
          <Route path="/" element={<Signin/>} />
          <Route path="/New" element={<NewStudent/>} />
          <Route path="/attendance" element={<StudentsList/>} />
          <Route path="/profil" element={<StudentProfil/>} />
          <Route path="/Details" element={<AssignementDetails/>} />
          <Route path="/AssignmentList" element={<AssignmentList/>} />
          <Route path="/List" element={<Group/>} />
          <Route path="/GroupDetail" element={<GroupDetails/>} />
          <Route path="/Groups" element={<GroupsList/>} />
          <Route path="/admin" element={<AdminSignin/>} />
          <Route path="/Rendus" element={<Rendus/>} />
          <Route path="/CoursesList" element={<CoursList/>} />
           <Route path="/Accounts" element={<Accounts/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>






     
    </div>
  );
}

export default App;
