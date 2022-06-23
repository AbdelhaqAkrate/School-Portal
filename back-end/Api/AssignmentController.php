<?php
header('Access-Control-Allow-Origin:*');

header('Content-Type: application/json ; charset=utf-8');
 header('Content-Type: multipart/form-data');
header("Access-Control-Allow-Methods: *");
header("Access-Control-Max-Age: 600");
header("Access-Control-Allow-Headers:*");
require __DIR__."/../Model/Assignment.php";

class AssignmentController
{
    //get assignment for each group by teacher
    public function groupAssignment($idT)
    {
        $assignment = new Assignment();
        $idG = $_POST["group"];
        $json = json_encode($assignment->getAssignmentByGroup($idT,$idG));
        echo $json;
    }
    //get rendu 
    public function getRendu($id)
    {
         $assignment = new Assignment();
        $idA = $_POST["assign"];
        $json = json_encode($assignment->getRendu($id,$idA));
        echo $json;
    }


     public function assignmentRendu($id)
    {
         $assignment = new Assignment();
        $json = json_encode($assignment->assignmentRendu($id));
        echo $json;
    }

    //validate assignment
    public function validate($id)
{

   $assignment = new Assignment();
    if($assignment->validate($id)){
            http_response_code(200);
            echo  json_encode(array("message" => "assignment validated successfully !!"));
            }
            else {
            http_response_code(400);
            echo json_encode(array("message" => "Error encoutred"));}
}

    //invalidate assignment
    public function invalidate($id)
{

   $assignment = new Assignment();
    if($assignment->invalidate($id)){
            http_response_code(200);
            echo  json_encode(array("message" => "assignment invalidated successfully !!"));
            }
            else {
            http_response_code(400);
            echo json_encode(array("message" => "Error encoutred"));}
}



}
