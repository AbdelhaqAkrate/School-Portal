<?php

header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json ; charset=utf-8');
header('Content-Type: multipart/form-data');
header("Access-Control-Allow-Methods: *");
header("Access-Control-Max-Age: 600");
header("Access-Control-Allow-Headers:*");
require __DIR__."/../Model/Enseignant.php";

class EnseignantController{

    //function to get students list

    public function addAssignment()
    {
          $Enseignant = new Enseignant() ;
          $title = str_replace("'",' ',$_POST["title"]);
          $details = str_replace("'",' ', $_POST["details"]);
          $context = str_replace("'",' ',$_POST["context"]);
          $file=$_FILES['file']['name'];
          $dest='C:/xampp/htdocs/Portal/front-end/public/assignment/' .basename($file);
          $posted_at = $_POST["posted_at"];
          $group = $_POST["group"];
          $teacher = $_POST["teacher"];
 
            if(move_uploaded_file($_FILES['file']['tmp_name'], $dest))
              {
                
                if($Enseignant->addAssignment($title,$details,$context,$posted_at,$file,$group,$teacher))
                {
                http_response_code(200);
                echo  json_encode(array("message" => "Assignment Created Successfully !!"));
                }
                else 
                {
                http_response_code(400);
                echo json_encode(array("message" => "error encoutred"));
                }
              }
    }










     public function addCours()
    {
          $Enseignant = new Enseignant() ;
          $title = str_replace("'",' ',$_POST["title"]);
          $details = str_replace("'",' ', $_POST["details"]);
          $file=$_FILES['file']['name'];
          $dest='C:/xampp/htdocs/Portal/front-end/public/courses/' .basename($file);
          $posted_at = $_POST["posted_at"];
          $teacher = $_POST["teacher"];
 
            if(move_uploaded_file($_FILES['file']['tmp_name'], $dest))
              {
                
                if($Enseignant->addCourse($title,$details,$posted_at,$file,$teacher))
                {
                http_response_code(200);
                echo  json_encode(array("message" => "Course Created Successfully !!"));
                }
                else 
                {
                http_response_code(400);
                echo json_encode(array("message" => "error encoutred"));
                }
              }
    }

      //function to get teacher info
      public function teacherInfo($id)
    {
        $teacher = new Enseignant();
        $json = json_encode($teacher->getInfo($id));
        echo $json;
    }
     public function deteteCours($id)
     {
       $teacher = new Enseignant();
       if($teacher->DeleteCourse($id)){
            http_response_code(200);
            echo  json_encode(array("message" => "course Deleted successfully !!"));
            }
            else {
            http_response_code(400);
            echo json_encode(array("message" => "Error encoutred"));}
     }
       public function deteteAssign($id)
     {
       $teacher = new Enseignant();
       if($teacher->DeleteAssign($id)){
            http_response_code(200);
            echo  json_encode(array("message" => "Assignment Deleted successfully !!"));
            }
            else {
            http_response_code(400);
            echo json_encode(array("message" => "Error encoutred"));}
     }
}