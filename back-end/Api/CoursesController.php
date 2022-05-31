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
    public function getCourses()
    {
        $courses = new Courses();
        $json = json_encode($courses->getCourses());
        echo $json;
    }
}