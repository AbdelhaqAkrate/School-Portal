<?php

require_once __DIR__."/..//Model/DbConnect.php";
class Assignment extends DbConnect
{

    //get all subjects
    public function getAssignmentByGroup($idT,$idG)
    {
          $query = $this->connect()->prepare("SELECT assignment.*,teacher.Fname,teacher.Lname FROM `assignment` JOIN teacher ON assignment.teacher = teacher.teacherId join `group` on assignment.group = `group`.`groupId` WHERE teacher.teacherId =$idT AND assignment.group = $idG;");
                if($query->execute())
                {
                    return $query->fetchAll(PDO::FETCH_ASSOC);
                }
                else{
                    return 0;
                }
    }
 //get  rendu
    public function getRendu($id,$idA)
    {
          $query = $this->connect()->prepare("SELECT assignmentfile.* , student.Fname,student.Lname FROM `assignmentfile` join assignment on assignment.assignmentId = assignmentfile.assignmentId JOIN student on assignmentfile.studentId = student.studentId WHERE student.studentId = $id AND assignment.assignmentId=$idA;");
                if($query->execute())
                {
                    return $query->fetchAll(PDO::FETCH_ASSOC);
                }
                else{
                    return 0;
                }
    }

 //get all rendu of assignment
    public function assignmentRendu($id)
    {
          $query = $this->connect()->prepare("SELECT assignmentfile.*,student.Fname,student.Lname FROM assignmentfile JOIN assignment on assignment.assignmentId=assignmentfile.assignmentId JOIN student on student.studentId=assignmentfile.studentId WHERE assignment.assignmentId=$id;");
                if($query->execute())
                {
                    return $query->fetchAll(PDO::FETCH_ASSOC);
                }
                else{
                    return 0;
                }
    }
     //validate assignment
    public function validate($id)
    {
          $query = $this->connect()->prepare("UPDATE `assignmentfile` SET `state` = '1' WHERE `assignmentfile`.`fileId` =$id;");
                if($query->execute())
                {
                    return true;
                }
                else{
                    return false;
                }
    }


     //invalidate assignment
    public function invalidate($id)
    {
          $query = $this->connect()->prepare("UPDATE `assignmentfile` SET `state` = '0' WHERE `assignmentfile`.`fileId` =$id;");
                if($query->execute())
                {
                    return true;
                }
                else{
                    return false;
                }
    }
}