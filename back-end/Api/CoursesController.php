<?php
header('Access-Control-Allow-Origin:*');

header('Content-Type: application/json ; charset=utf-8');
 header('Content-Type: multipart/form-data');
header("Access-Control-Allow-Methods: *");
header("Access-Control-Max-Age: 600");
header("Access-Control-Allow-Headers:*");
require __DIR__."/../Model/Courses.php";

class CoursesController
{
    //courses list
    public function getCourses($id)
    {
        $courses = new Courses();
        $json = json_encode($courses->getCourses($id));
        echo $json;
    }
      //courses list
    public function allCourses()
    {
        $courses = new Courses();
        $json = json_encode($courses->allCourses());
        echo $json;
    }
    //subjects list
    public function getSubjects()
    {
        $courses = new Courses();
        $json = json_encode($courses->getSubjects());
        echo  $json;
    }
}