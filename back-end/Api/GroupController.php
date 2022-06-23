<?php

header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json ; charset=utf-8');
header('Content-Type: multipart/form-data');
header("Access-Control-Allow-Methods: *");
header("Access-Control-Max-Age: 600");
header("Access-Control-Allow-Headers:*");
require __DIR__."/../Model/Group.php";

class GroupController{

    //function to get students list

    public function groupsList()
    {
        $group = new Group();
        $json = json_encode($group->groups());
        echo $json;
    }

    //assigned group 
    public function assignedGroup($id) 
    {
         $group = new Group();
        $json = json_encode($group->teacherGroup($id));
        echo $json;
    }
    //assigned group count
      public function assignedGroupDetail($id) 
    {
         $group = new Group();
        $json = json_encode($group->groupDetail($id));
        echo $json;
    }

}