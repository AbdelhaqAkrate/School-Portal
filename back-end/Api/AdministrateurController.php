<?php

use Firebase\JWT\JWT;
use Firebase\JWT\Key;
require __DIR__ . '../../../vendor/autoload.php';
header('Access-Control-Allow-Origin:*');

header('Content-Type: application/json ; charset=utf-8');
 header('Content-Type: multipart/form-data');
header("Access-Control-Allow-Methods: *");
header("Access-Control-Max-Age: 600");
header("Access-Control-Allow-Headers:*");
require __DIR__."/../Model/Administrateur.php";

class AdministrateurController
{
 
  //adding new teacher 
    public function addEnseignant()
    {
          $admin = new Administrateur() ;
          $Fname = $_POST["fname"];
          $Lname = $_POST["lname"];
          $phone = $_POST["phone"];
          $image=$_FILES['image']['name'];
          $adresse = $_POST["adresse"];
          $dest='C:/xampp/htdocs/Portal/front-end/src/uploads/' .basename($image);
          $email = $_POST["email"];
          $subjectId = $_POST["subject"];
          $gender = $_POST["gender"];
            if(move_uploaded_file($_FILES['image']['tmp_name'], $dest))
              {
                
                if($admin->addEnseignant($Fname,$Lname,$phone,$image,$adresse,$email,$gender,$subjectId))
                {
                http_response_code(200);
                echo  json_encode(array("message" => "Teacher saved successfully !!"));
                }
                else 
                {
                http_response_code(400);
                echo json_encode(array("message" => "error encoutred"));
                }
              }
    }

  // adding new student
    
    public function addStudent()
    {
          $admin = new Administrateur() ;
          $Fname = $_POST["fname"];
          $Lname = $_POST["lname"];
          $birth = $_POST["birth"];
          $phone = $_POST["phone"];
          $adresse = $_POST["adresse"];
          $image=$_FILES['image']['name'];
          $class = $_POST['class'];
          $dest='C:/xampp/htdocs/Portal/front-end/src/uploads/' .basename($image);
          $email = $_POST["email"];
          $gender = $_POST["gender"];

          //chech if student exist

          $isExist =$admin->avoidDuplicate($Lname,$Fname);
          
          if($isExist["COUNT(studentId)"] === 0)
          {
             if(move_uploaded_file($_FILES['image']['tmp_name'], $dest))
              {
                
                if($admin->addStudent($Fname,$Lname,$birth,$phone,$image,$adresse,$email,$gender,$class))
                {
                // http_response_code(200);
                echo  json_encode(array("message" => "Student Saved Successfully !!"));
                }
                else 
                {
                // http_response_code(400);
                echo json_encode(array("message" => "Error Encoutred"));
                }
              }
          }
          else{
            // http_response_code(400);
            echo json_encode(array("message" => "Student Is Already Exist !!!!!"));;
          }
           
    }

    //add by type of person

    public function addNew()
    {
      $type = $_POST["type"];
      if($type == "Student")
      {
        $this->addStudent();
      }
      else if($type == "Teacher"){
        $this->addEnseignant();
      }
    }

    //login function for admin

             public function login()
            {

                $admin = new Administrateur() ;
                $email=json_decode(file_get_contents("php://input"));
                $pass=json_decode(file_get_contents("php://input"));
                $json = $admin->getAdmin($email->email);
                $issuedAt   = new DateTimeImmutable();
                foreach($json as $j)
                {
                   $adminId = $j["adminId"];
                   $password = $j["password"];
                   $Lname = $j["Lname"];
                  if($json !=0 && password_verify($pass->password, $password))
                   { 
                      $payload=[
                      'iss'=>'localhost',
                      'and'=>'localhost',
                      'exp'=>$issuedAt->modify('+60 minutes')->getTimestamp(),
                      'data' =>[
                      'email'=>$email,
                      ],
                      ];
                      $secret_Key="akrate1999";
                      $jwt=JWT::encode($payload,$secret_Key,'HS512');
                      echo json_encode([
                          'status' => 1,
                          'adminToken'=>$jwt,
                          'message' => 'Login Successfully',
                          'expire' =>$payload['exp'],
                          'Lname' =>$Lname,
                          'adminId' =>$adminId,
                    ]);
                  }
                  else{
                    echo json_encode([
                          'status' => 0,
                          'message' => 'Something went wrong !!',
                    ]);
                  }
                }
            }
            public function createStudentAccount()
            {
              $admin = new Administrateur();
              $email = $_POST["email"];
              $pass =$_POST["password"];
              $role = $_POST["role"];
              $student = $_POST["student"];
              $password=password_hash($pass, PASSWORD_DEFAULT);
              if($admin->createAccountStudent($email,$password,$role,$student))
              {
                echo  json_encode(array("message" => "Account Created Successfully !!"));
              }
              else{
                echo  json_encode(array("message" => "Something went wrong !!"));
              }
            }
}