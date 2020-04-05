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

                $query = "SELECT * FROM user WHERE user =\"" . $userInput . "\"";

                $result = $link->query($query);
                if ($link->connect_error) {
                    die("Connection failed: " . $link->connect_error);
                } 

                if ($result->num_rows > 0) {
                    // output data of each row
                    while($row = $result->fetch_assoc()) {
                        // echo "id: " . $row["id"]. " - Name: " . $row["user"]. " " . $row["pass"]. "<br>";
                        if($passInput == $row['pass']){
                            
                            // $message = "Logged in!";

                            $_SESSION['loggedin'] = true;
                            $_SESSION['user'] = $userInput;
                        }
                    }
                } else {
                    $message = "<div class=\"dev-notice\">Login error: No user found.</div>";
                }


            }

            else{
                if (!(strlen($_POST['user']) > 8)) $message = $message .  "<div class=\"dev-notice\">Login error: Username too short</div>";
                    

                // $message = $message  "";
                $flag = true;
            };
            
    }

}