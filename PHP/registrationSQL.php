<?php
/*
*******************************
Food n' Boom'd
Registration SQL handler
Version 1
*******************************
*/


//This file is included by registration.php.  All variables in this namespace are shared out to that file.

//Call for mysql login info
require 'mysqlCredentials.php';
$message="";
$flag = false;

if (isset($_POST['registration-button'])){
    //If button is pressed
  
    if ((isset($_POST['user']) && isset($_POST['pass'])) && (isset($_POST['pass2']) && isset($_POST['email']) )){
       
            if (!(
                (strpos($_POST['user'], "*")) ||
                (strpos($_POST['user'], "<")) ||
                (strpos($_POST['user'], ">")) ||
                (strpos($_POST['user'], ";")) ||

                (strpos($_POST['pass'], "*")) ||
                (strpos($_POST['pass'], "<")) ||
                (strpos($_POST['pass'], ">")) ||
                (strpos($_POST['pass'], ";")) ||

                (strpos($_POST['pass2'], "*")) ||
                (strpos($_POST['pass2'], "<")) ||
                (strpos($_POST['pass2'], ">")) ||
                (strpos($_POST['pass2'], ";")) ||

                (strpos($_POST['email'],"..")) || //consecutive dots
                (strpos($_POST['email'], "<")) ||
                (strpos($_POST['email'], ">")) ||
                (strpos($_POST['email'], ";")) ||

                
                ($_POST['pass']!=$_POST['pass2'])

                )) //end of if block
                
                {
                    //Specific errors
                    if((strlen($_POST['user']) < 8)||strlen($_POST['pass'])<8) {
                        echo "<div class=\"dev-notice\">Registration error: User or password under 8 characters.</div>";

                    } else {

                        //successful registration

                        require 'registrationEmailHandler.php';

                        //Random 16 digit salt
                        $salt = random_bytes(16);

                        $link = mysqli_connect($host, $un, $pass, $db);

                        //salt the pass
                        $salted= $salt.$_POST['pass'];

                        //hash the salted pass
                        $hash = hash('sha256', $salted);
                        mysqli_report(MYSQLI_REPORT_ALL);
                        $result = $link->prepare("INSERT INTO `user` ( `user`, `pass`, `email`, `score`) VALUES (?, ?, ?, '0')");

                        $user = $_POST['user'];
                        $email = $_POST['email'];

                        $result->bind_param('sss', $user, $hash, $email);

                        $result->execute();
                        $result->store_result();

                        if ($link->connect_error) {
                            die("Connection failed: " . $link->connect_error);
                        } 

                        if ($result === false) echo "<div class=\"dev-notice\">MYSQL ERROR</div>";
                        else echo "<div class=\"success-notice\">Successful registration! Click <a href=\"login\">here</a> to login.</div>";







                    }
                } else {
                    echo "Registration error."; //This fires if passwords dont match or invalid character is used
                }          
            
    }

}