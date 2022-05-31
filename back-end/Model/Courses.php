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
        public function getCourses()
    {
          $query = $this->connect()->prepare("SELECT cours.*,teacher.Fname,teacher.Lname,teacher.Image,subject.title FROM `cours` JOIN `teacher` on cours.teacherId = teacher.teacherId JOIN `subject` on teacher.subjectId=subject.subjectId;");
                if($query->execute())
                {
                    return $query->fetchAll(PDO::FETCH_ASSOC);
                }
                else{
                    return 0;
                }
    }
}