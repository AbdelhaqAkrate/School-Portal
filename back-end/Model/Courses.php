<?php

require_once __DIR__."/..//Model/DbConnect.php";
class Courses extends DbConnect
{

    //get all subjects
    public function getSubjects()
    {
          $query = $this->connect()->prepare("SELECT * FROM `subject`");
                if($query->execute())
                {
                    return $query->fetchAll(PDO::FETCH_ASSOC);
                }
                else{
                    return 0;
                }
    }
    //get all courses 
        public function getCourses($id)
    {
          $query = $this->connect()->prepare("SELECT cours.*,teacher.Lname,teacher.Fname,teacher.Image,subject.title as subject FROM `cours` join teacher on cours.teacherId = teacher.teacherId JOIN `group` on `group`.teacherId = teacher.teacherId JOIN student on `group`.`groupId` = student.class JOIN `subject` on teacher.subjectId=subject.subjectId WHERE student.studentId=$id;");
                if($query->execute())
                {
                    return $query->fetchAll(PDO::FETCH_ASSOC);
                }
                else{
                    return 0;
                }
    }


     //get all courses 
        public function allCourses()
    {
          $query = $this->connect()->prepare("SELECT cours.*,teacher.Lname,teacher.Fname,teacher.Image,subject.title as subject FROM `cours` join teacher on cours.teacherId = teacher.teacherId JOIN `subject` on teacher.subjectId=subject.subjectId;");
                if($query->execute())
                {
                    return $query->fetchAll(PDO::FETCH_ASSOC);
                }
                else{
                    return 0;
                }
    }
}