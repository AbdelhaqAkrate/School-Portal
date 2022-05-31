<?php

require_once __DIR__."/..//Model/DbConnect.php";
class Student extends DbConnect
{
//   public function downloadCours($file)
//   {
//     $filename = $file;

//         if(file_exists($filename)) 
//         {
//             header('Content-Description: File Transfer');
//             header('Content-Type: application/octet-stream');
//             header("Cache-Control: no-cache, must-revalidate");
//             header("Expires: 0");
//             header('Content-Disposition: attachment; filename="'.basename($filename).'"');
//             header('Content-Length: ' . filesize($filename));
//             header('Pragma: public');
//             readfile($filename);
//         }

// }
    public function sendAssignment($id,$file,$studentId)
    {
        $date = date("y-m-d");
        $query=$this->connect()->prepare("INSERT INTO `assignmentfile`( `posted_at`, `file`, `studentId`, `assignmentId`) VALUES ('$date','$file','$studentId','$id')");
            if($query->execute())
              return true;
                return false;
    }
    
    public function getInfo($id)
    {
         $query=$this->connect()->prepare("SELECT * FROM `student` WHERE `studentId`='$id'");
            if($query->execute()){
                return $query->fetch(PDO::FETCH_ASSOC);
                
            }else{
                return 0;
            }
    }
}