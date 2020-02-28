<?php
	session_start();

//This file is included by login.php.  All variables in this namespace are shared out to that file.

//Call for mysql login info
include 'mysqlCredentials.php';
$message="";
$flag = false;

if (isset($_POST['login-button'])){
    //If button is pressed
  
    if (isset($_POST['user']) && isset($_POST['pass'])){
        //If both fields are full

        if ((strlen($_POST['user']) > 8) &&
            
            
        //Bad characters for injects
        //According to this Im being too paranoid... and also not paranoid enough
        //https://phpdelusions.net/sql_injection
        (!
            (strpos($_POST['user'], ';')) ||
            (strpos($_POST['user'], '-')) ||
            (strpos($_POST['user'], "*")) ||
            (strpos($_POST['pass'], ';')) ||
            (strpos($_POST['pass'], '-')) ||
            (strpos($_POST['pass'], "*")) 
        )   
            
            
            )
            {
                $userInput = $_POST['user'];
                $passInput = $_POST['pass'];




                $message = $userInput . " " . $passInput;
            }

            else{
                $message = "Bad login";
                $flag = true;
            };
            
    }

}