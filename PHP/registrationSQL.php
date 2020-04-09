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
                    }
                    else{
                        //successful registration

                        require 'registrationEmailHandler.php';

                        $salt = random_bytes ( int $16 ) : string

                        $hash = hash('sha256', $pass);

                        $link = mysqli_connect($host, $un, $pass, $db);

                        $salted= $salt.$_POST['pass'];

                        $hash = hash('sha256', $pass);

                        $result = $link->prepare("INSERT INTO `cis273`.`user` (`id`, `user`, `pass`, `email`, `score`) VALUES (NULL, \"" . $_POST['user'] .  "\" , \"".$_POST['pass']."\" , \"".$_POST['email']."\", '0');");

                        $result->bind_param('isssi', $id, $user, $hash, $email, $score);

                        $result->execute();
                        $result->store_result();

                        $result = $link->query($query);
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