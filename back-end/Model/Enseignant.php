<?php

require_once __DIR__."/..//Model/DbConnect.php";
class Enseignant extends DbConnect
{
    
        //function for creating a cours

    public function addCourse($title,$description,$time,$file,$teacher)
        {
            $query = $this->connect()->prepare("INSERT INTO `cours`(`title`, `description`, `postedAt`, `file`, `teacherId`) VALUES ('$title','$description','$time','$file','$teacher')");
                if($query->execute())
                return true;
                return false;
        }  


    
        //function for Deleting course 
    public function DeleteCourse($id)
        {
            $query = $this->connect()->prepare("DELETE FROM `cours` WHERE `coursId` = '$id'" );
            if($query->execute())
            return true;
            return false;
        }
           public function DeleteAssign($id)
        {
            $query = $this->connect()->prepare("DELETE FROM `assignment` WHERE assignmentId = '$id'" );
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

    //function to create assignment

      public function addAssignment($title,$details,$context,$posted_at,$file,$group,$teacher)
        {
            $query = $this->connect()->prepare("INSERT INTO `assignment`(`title`, `details`, `context`, `posted_at`, `file`, `group`, `teacher`) VALUES ('$title','$details','$context','$posted_at','$file','$group','$teacher')");
                if($query->execute())
                return true;
                return false;
        }  


    //get teacher info
        public function getInfo($id)
    {
         $query=$this->connect()->prepare("SELECT * FROM `teacher` WHERE `teacherId`='$id'");
            if($query->execute()){
                return $query->fetch(PDO::FETCH_ASSOC);
                
            }else{
                return 0;
            }
    }

}
