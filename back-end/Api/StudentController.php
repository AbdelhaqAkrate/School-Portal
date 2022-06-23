<?php

header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json ; charset=utf-8');
header('Content-Type: multipart/form-data');
header("Access-Control-Allow-Methods: *");
header("Access-Control-Max-Age: 600");
header("Access-Control-Allow-Headers:*");
require __DIR__."/../Model/Student.php";

class StudentController{

    //function to get students list

    public function studentList($id)
    {
        $student = new Student();
        $json = json_encode($student->getStudents($id));
        echo $json;
    }
    //function to get student info
      public function studentInfo($id)
    {
        $student = new Student();
        $json = json_encode($student->studentInfo($id));
        echo $json;
    }

    //get assidned assignments
    public function assignedAssignments($id)
    {
        $student = new Student();
        $json = json_encode($student->assignedAssignments($id));
        echo $json;
    }

        //get assidned assignment details
    public function assignmentDetail($id)
    {
        $student = new Student();
        $json = json_encode($student->assignmentDtails($id));
        echo $json;
    }

    //send Rendu

        public function sendRendu()
    {
          $student = new Student() ;
          $studentId = $_POST["student"];
          $id = $_POST["assignment"];
          $file=$_FILES['file']['name'];
          $dest='C:/xampp/htdocs/Portal/front-end/public/Rendu/' .basename($file);
 
            if(move_uploaded_file($_FILES['file']['tmp_name'], $dest))
              {
                
                if($student->sendAssignment($id,$file,$studentId))
                {
                http_response_code(200);
                echo  json_encode(array("message" => "Rendu Sent Successfully !!"));
                }
                else 
                {
                http_response_code(400);
                echo json_encode(array("message" => "error encoutred"));
                }
              }
    }


     //function to get students list without accounts

    public function withoutAccount($id)
    {
        $student = new Student();
        $json = json_encode($student->withoutAccount($id));
        echo $json;
    }
}