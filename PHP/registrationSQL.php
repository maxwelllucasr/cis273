<?php

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
                        echo "Registration error: User or password under 8 characters.";
                    }
                    else{
                        //successful registration

                        $link = mysqli_connect($host, $un, $pass, $db);
                        $query = "INSERT INTO `cis273`.`user` (`id`, `user`, `pass`, `email`, `score`) VALUES (NULL, \"" . $_POST['user'] .  "\" , \"".$_POST['pass']."\" , \"".$_POST['email']."\", '0');";

                        $link->query($query);


                        echo "Successful registration! Click <a href=\"login.php\">here</a> to login.";







                    }
                }
                else{
                    echo "Registration error."; //This fires if passwords dont match or invalid character is used
                }          
            
    }

}