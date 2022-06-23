<?php


require_once __DIR__."/../Model/DbConnect.php";

class Group extends DbConnect
{

     public function groups()
        {
            $query=$this->connect()->prepare("SELECT student.class,COUNT(studentId) as Nb_students , `group`.title FROM `student` join `group` ON `group`.`groupId` = student.class GROUP BY class;");
            if($query->execute()){
                return $query->fetchAll(PDO::FETCH_ASSOC);
                
            }else{
                return 0;
            }
        }
    public function teacherGroup($id)
        {
            $query=$this->connect()->prepare("SELECT * FROM `group` WHERE teacherId = $id;");
            if($query->execute()){
                return $query->fetchAll(PDO::FETCH_ASSOC);
                
            }else{
                return 0;
            }
        }
    public function groupDetail($id)
    {
        $query=$this->connect()->prepare("SELECT student.class,COUNT(studentId) as Nb_students , `group`.title FROM `student` join `group` ON `group`.`groupId` = student.class where group.teacherId = $id GROUP BY class;");
            if($query->execute()){
                return $query->fetchAll(PDO::FETCH_ASSOC);
                
            }else{
                return 0;
            }
    }


}