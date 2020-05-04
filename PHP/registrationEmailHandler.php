<?php
/*
*******************************
Food n' Boom'd
Registration Email handler
Version 1
*******************************
*/
//https is defined in header.php
if($https) $domain = "https://$_SERVER[HTTP_HOST]";
else $domain = "http://$_SERVER[HTTP_HOST]";

// $forum = $domain . "forum";

$subject = $_POST['user'] . ", welcome to Food n' Boom'd!";
$message = "Welcome " .$_POST['user'] . " to Food n' Boom'd!  We hope you enjoy our game!  \nYou can access our forum here: " . $domain;
$email = $_POST['email'];

fnbdebug($email . "\n" . $message . "\n" . $email);

if(!strpos($domain,'localhost')){
    fnbdebug("Sending mail to: " . $email);  
    mail($email,$subject,$message);
}
?>