<?php    
/*
*******************************
Food n' Boom'd
Highscore Handler
Version 1
*******************************
*/
require "functions.php";

fnbdebug("Before isset");
if (isset($_POST['score'])){
    session_start();
    require 'mysqlCredentials.php';
    fnbdebug("After isset");



    //DB

    //get current score
    if($_SESSION['loggedin']){
        //Connect, query
        $link = mysqli_connect($host, $un, $pass, $db);

        $result = $link->prepare("SELECT user, score FROM `user` WHERE `user` = ?;");
        $result->bind_param('s',$_SESSION['user']);
        $result->execute();
        $result->store_result();

        if ($link->connect_error) {
            die("Connection failed: " . $link->connect_error);
        } 

        //only proceed if exactly one result
        if ($result->num_rows == 1) {
            $result->bind_result($user, $score);
            $result->fetch();
            // $userHighScore = $row['score'];

            if ($score < $_POST['score']){

                //update database high score if current post > one in db
                $result = $link->prepare("UPDATE `user` SET `score` = ? WHERE `user` = ?;");
                $result->bind_param('is',$_POST['score'],$user);
                $result->execute();
                $result->store_result();

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