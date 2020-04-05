<?php    
/*
*******************************
Food n' Boom'd
Highscore Handler
Version 1
*******************************
*/


if (isset($_POST['score'])){
    session_start();
    require 'mysqlCredentials.php';



    //DB

    //get current score
    if($_SESSION['loggedin']){
        //Connect, query
        $link = mysqli_connect($host, $un, $pass, $db);
        $query = "SELECT * FROM `user` WHERE `user` = \"" . $_SESSION['user'] . "\";";
        $result = $link->query($query);
        if ($link->connect_error) {
            die("Connection failed: " . $link->connect_error);
        } 

        //only proceed if exactly one result
        if ($result->num_rows == 1) {
            $row = $result->fetch_assoc();
            $userHighScore = $row['score'];

            if ($userHighScore < $_POST['score']){
                //update database high score if current post > one in db
                $query = "UPDATE `user` SET `score` = ".$_POST['score']." WHERE `user` = \"".$_SESSION['user']."\";";
                $link->query($query); //no need for result, just sending here
                if ($link->connect_error) {
                    die("Connection failed: " . $link->connect_error);
                } 
            }
        }
    
    }
    //Logging
    $scoreLog = fopen("../log/scoreLog.log","a"); //append
    if ($_SESSION['loggedin']) $message = $_SESSION['user'] . " score: " . $_POST['score'] . "\n" ;
    else $message = "Guest score: " . $_POST['score'] . "\n" ;
    fwrite($scoreLog, $message);
    fclose($scoreLog);
    

  

}