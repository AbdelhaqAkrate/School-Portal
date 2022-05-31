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
require __DIR__."/../Model/Compte.php";

class AuthenticationController
{






      public function login()
            {

                $auth = new Compte() ;
                $email=json_decode(file_get_contents("php://input"));
                $pass=json_decode(file_get_contents("php://input"));
                $json = $auth->getCompte($email->email);
                $issuedAt   = new DateTimeImmutable();
                foreach($json as $j)
                {
                   
                   $password = $j["password"];
                   $role = $j["role"];
                  if($json !=0 && password_verify($pass->password, $password))
                   { 
                       switch($role)
                        { 
                            case "teacher" :
                                $teacherId = $j["teacherId"];
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
                                    'teacherToken'=>$jwt,
                                    'message' => 'Login Successfully',
                                    'expire' =>$payload['exp'],
                                    'teacherId' =>$teacherId,
                                ]);
                                break;

                                case "student" :
                                $studentId = $j["studentId"];
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
                                    'studentToken'=>$jwt,
                                    'message' => 'Login Successfully',
                                    'expire' =>$payload['exp'],
                                    'studentId' =>$studentId,
                                ]);
                                break;
                         }
                  }
                  else{
                    echo json_encode([
                          'status' => 0,
                          'message' => 'Something went wrong !!',
                    ]);
                  }
                }
            }

    
}