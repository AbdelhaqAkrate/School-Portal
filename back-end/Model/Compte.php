<?php


require_once __DIR__."/../Model/DbConnect.php";

class Compte extends DbConnect
{

     public function getCompte($email)
        {
            $query=$this->connect()->prepare("SELECT * From account WHERE `account`.`email` = '$email'");
            if($query->execute()){
                return $query->fetchAll(PDO::FETCH_ASSOC);
                
            }else{
                return 0;
            }
        }
    public function getStudentImage($id)
    {
        $query=$this->connect()->prepare("SELECT student.Image FROM `student` WHERE studentId =$id");
            if($query->execute()){
                return $query->fetch(PDO::FETCH_ASSOC);
                
            }else{
                return 0;
            }
    }

      public function getTeacherImage($id)
    {
        $query=$this->connect()->prepare("SELECT teacher.Image FROM `teacher` WHERE teacherId =$id");
            if($query->execute()){
                return $query->fetch(PDO::FETCH_ASSOC);
                
            }else{
                return 0;
            }
    }

}