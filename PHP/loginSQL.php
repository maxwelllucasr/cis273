<?php
/*
*******************************
Food n' Boom'd
Login SQL handler
Version 1
*******************************
*/


//This file is included by login.php.  All variables in this namespace are shared out to that file.

//Call for mysql login info
require 'mysqlCredentials.php';
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
            (strpos($_POST['user'], '<')) ||
            (strpos($_POST['user'], '-')) ||
            (strpos($_POST['user'], "*")) ||
            (strpos($_POST['pass'], '<')) ||
            (strpos($_POST['pass'], ';')) ||
            (strpos($_POST['pass'], '-')) ||
            (strpos($_POST['pass'], "*")) 

        )   
            
            
            )
            {
                $link = mysqli_connect($host, $un, $pass, $db);

                $userInput = $_POST['user'];
                $passInput = $_POST['pass'];

                // $query = 'SELECT * FROM user WHERE user = ?';

                // $result = $link->query($query);
                if ($link->connect_error) {
                    die("Connection failed: " . $link->connect_error);
                } 

                if( !isset($_POST['user'], $_POST['pass']) ) {
                    die ('Please fill all fields');
                }


                    $result = $link->prepare("SELECT user, id, pass FROM user WHERE user = ?");
                    $result->bind_param('s', $_POST['user']);
                    $result->execute();
                    $result->store_result();
                

                    if ($result->num_rows > 0) {
                        $result->bind_result($user, $id, $password);
                        $result->fetch();

                        //change back to this once we've hashed the passwords
                        // if (password_verify($_POST['pass'], $password)) {
                        if ($_POST['pass'] == $password){
                            // $session_regenerate_id();
                            $_SESSION['loggedin'] = TRUE;
                            $_SESSION['user'] = $_POST['user'];
                            $_SESSION['id'] = $id;
                            echo 'Hello ' . $_SESSION['user'];
                        } else {
                            echo 'Password incorrect.';
                        }
                        $result->close();
                    }

                } else {
                    if (!(strlen($_POST['user']) > 8)) $message = $message .  "<div class=\"dev-notice\">Login error</div>";
                

                // $message = $message  "";
                $flag = true;
            };
            
    }

}