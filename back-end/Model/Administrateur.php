<?php

require_once __DIR__."/../Model/DbConnect.php";

class Administrateur extends DbConnect
{
    //function for creating a new teacher
    public function addEnseignant($Fname,$Lname,$phone,$image,$adresse,$email,$gender,$subjectId)
        {
            $query=$this->connect()->prepare("INSERT INTO `teacher`(`Fname`, `Lname`, `Phone`, `Image`, `adresse`, `email`, `gender`, `subjectId`) VALUES ('$Fname','$Lname','$phone','$image','$adresse','$email','$gender','$subjectId')");
                if($query->execute())
                return true;
                return false;
        }  

        //function for updating teacher details

    public function updateEnseignantInfo($id,$Fname,$Lname,$phone,$image,$adresse,$email,$gender,$subjectId)
        {
            $query=$this->connect()->prepare("UPDATE `teacher` SET `Fname`='$Fname',`Lname`='$Lname',`Phone`='$phone',`Image`='$image',`adresse`='$adresse',`email`='$adresse',`gender`='$gender',`subjectId`='$subjectId' WHERE `teacherId`='$id'");
                if($query->execute())
                return true;
                return false;
        }
    
        //function for Deleting teacher 

    public function DeleteEnseignant($id)
        {
            $query = $this->connect()->prepare("DELETE FROM `teacher` WHERE `teacherId` = '$id'");
            if($query->execute())
            return true;
            return false;
        }

        //function to check if student already exist or not

    public function avoidDuplicate($lname,$fname)
    {
        $query = $this->connect()->prepare("SELECT COUNT(studentId) FROM `student` WHERE `Lname` = '$lname' AND `Fname`='$fname';");
        if($query->execute())
    {    return $query->fetch(PDO::FETCH_ASSOC);}
       else {return 0;}
    }

        //function for creating a new student

    public function addStudent($Fname,$Lname,$birth,$phone,$image,$adresse,$email,$gender,$class)
        {
            
                $query=$this->connect()->prepare("INSERT INTO `student`(`Fname`, `Lname`, `birth`, `Phone`, `Image`, `adresse`, `email`, `gender`,`class`) VALUES ('$Fname','$Lname','$birth','$phone','$image','$adresse','$email','$gender','$class')");
                    $query->execute();
                        return true;
                          return false;
         
        }  
        
        //function for updating teacher details

    public function updateStudentInfo($id,$Fname,$Lname,$birth,$phone,$image,$adresse,$email,$gender)
        {
            $query=$this->connect()->prepare("UPDATE `student` SET `Fname`='$Fname',`Lname`='$Lname',`birth`='$birth',`Phone`='$phone',`Image`='$image',`adresse`='$adresse',`email`='$adresse',`gender`='$gender' WHERE `studentId`='$id'");
                if($query->execute())
                return true;
                return false;
        }
    
        //function for Deleting student 

    public function DeleteStudent($id)
        {
            $query = $this->connect()->prepare("DELETE FROM `student` WHERE `studentId` = '$id'");
            if($query->execute())
            return true;
            return false;
        }

        //function for getting list of groups

    public function groups()
    {
        $query=$this->connect()->prepare("SELECT * FROM `group`");
            if($query->execute()){
                return $query->fetchAll(PDO::FETCH_ASSOC);
                
            }else{
                return 0;
            }
    }
    public function group($id)
    {
        $query=$this->connect()->prepare("SELECT * FROM `group` WHERE `groupId`='$id'");
            if($query->execute()){
                return $query->fetch(PDO::FETCH_ASSOC);
                
            }else{
                return 0;
            }
    }
    //function for getting specific group


    public function getAdmin($email)
        {
            $query=$this->connect()->prepare("SELECT * FROM `admin` WHERE `admin`.`email` = '$email'");
            if($query->execute()){
                return $query->fetchAll(PDO::FETCH_ASSOC);
                
            }else{
                return 0;
            }
        }

    public function createAccountStudent($email,$password,$role,$student)
    {
            $query=$this->connect()->prepare("INSERT INTO `account`(`email`, `password`, `role`, `studentId`) VALUES ('$email','$password','$role','$student')");
                    $query->execute();
                        return true;
                          return false;
            
    }


}














?>