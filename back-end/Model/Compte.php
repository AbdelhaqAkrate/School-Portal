<?php


require_once __DIR__."/../Model/DbConnect.php";

class Compte extends DbConnect
{

     public function getCompte($email)
        {
            $query=$this->connect()->prepare("SELECT * FROM `account` WHERE `account`.`email` = '$email'");
            if($query->execute()){
                return $query->fetchAll(PDO::FETCH_ASSOC);
                
            }else{
                return 0;
            }
        }



}