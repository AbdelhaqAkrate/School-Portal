<?php

require_once __DIR__."/..//Model/DbConnect.php";
class Enseignant extends DbConnect
{
    
        //function for creating a cours

    public function addCourse($title,$description,$time,$file,$teacher)
        {
            $query = $this->connect()->prepare("INSERT INTO `cours`(`title`, `description`, `posted-at`, `file`, `teacherId`) VALUES ('$title','$description','$time','$file','$teacher')");
                if($query->execute())
                return true;
                return false;
        }  

        //function for updating the  course
           public function updateCouse($id,$title,$description,$time,$file)
        {
            $query = $this->connect()->prepare("UPDATE `cours` SET `title`='$title',`description`='$description',`posted-at`='$time',`file`='$file' WHERE `coursId`='$id'");
                if($query->execute())
                return true;
                return false;
        }
    
        //function for Deleting course 
    public function DeleteCourse($id)
        {
            $query = $this->connect()->prepare("DELETE FROM `cours` WHERE `coursId` = '$id'");
            if($query->execute())
            return true;
            return false;
        }

    public function assignedGroup($id)
        {
            $query = $this->connect()->prepare("SELECT * FROM `group` WHERE `groupId`='$id'");
            if($query->execute()){
                return $query->fetchAll(PDO::FETCH_ASSOC);   
            }else{
                return 0;
            }
        }
}