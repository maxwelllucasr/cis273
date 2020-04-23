<?php
/*
*******************************
Food n' Boom'd
Registration Email handler
Version 1
*******************************
*/

if($https) $domain = "https://$_SERVER[HTTP_HOST]";
else $domain = "http://$_SERVER[HTTP_HOST]";

$subject = $_POST['user'] . ", welcome to Food n' Boom'd!";
$message = "Welcome " .$_POST['user'] . "to Food n' Boom'd!  We hope you enjoy our game!  <br>Did you know that you can access our forum <a href=\"".$domain."/cis273/forum\">here</a>?";
$email = $_POST['email'];

if(!strpos($domain,'localhost')){
    fnbdebug("Sending mail to: " . $email);  
    mail($email,$subject,$message);
}
?>