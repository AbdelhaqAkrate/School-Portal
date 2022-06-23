<?php

require_once __DIR__."/..//Model/DbConnect.php";
class Student extends DbConnect
{
      public function StudentInfo($id)
    {
         $query=$this->connect()->prepare("SELECT * FROM `student` WHERE studentId= $id");
            if($query->execute())
                return $query->fetch(PDO::FETCH_ASSOC);
                return 0;
    }
    public function getStudents($id)
    {
         $query=$this->connect()->prepare("SELECT student.* FROM `student` JOIN `group` on `group`.`groupId`=student.class WHERE student.class=$id");
            if($query->execute())
                return $query->fetchAll(PDO::FETCH_ASSOC);
                return 0;
           
    }
    public function sendAssignment($id,$file,$studentId)
    {
        $date = date("y-m-d");
        $query=$this->connect()->prepare("INSERT INTO `assignmentfile`(`posted_at`, `file`, `studentId`, `assignmentId`, `state`) VALUES ('$date','$file','$studentId','$id','0')");
            if($query->execute())
              return true;
                return false;
    }
    
    public function getInfo($id)
    {
         $query=$this->connect()->prepare("SELECT * FROM `student` WHERE `studentId`='$id'");
            if($query->execute()){
                return $query->fetch(PDO::FETCH_ASSOC);
                
            }else{
                return 0;
            }
    }

    //get assignments

    public function assignedAssignments($id)
    {
         $query=$this->connect()->prepare("SELECT assignment.*,teacher.Fname,teacher.Lname,teacher.Image FROM `assignment` JOIN teacher on assignment.teacher=teacher.teacherId JOIN `group` on `group`.`groupId`=assignment.group JOIN student on `group`.`groupId`=student.class WHERE student.studentId='$id'");
            if($query->execute()){
                return $query->fetchAll(PDO::FETCH_ASSOC);
                
            }else{
                return 0;
            }
    }
      //get assignment

    public function assignmentDtails($id)
    {
         $query=$this->connect()->prepare("SELECT assignment.*,teacher.Fname,teacher.Lname,teacher.Image FROM assignment JOIN teacher on assignment.teacher = teacher.teacherId where assignment.assignmentId ='$id'");
            if($query->execute()){
                return $query->fetch(PDO::FETCH_ASSOC);
                
            }else{
                return 0;
            }
    }
    //get students without account
    public function withoutAccount($id)
    {
         $query=$this->connect()->prepare("SELECT student.* FROM `student` join account on account.studentId != student.studentId and student.class=$id;");
            if($query->execute())
                return $query->fetchAll(PDO::FETCH_ASSOC);
                return 0;
           
    }
}   