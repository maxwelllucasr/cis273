<?php
/*
*******************************
Food n' Boom'd
Functions section
Version 1
*******************************
*/


function fnbdebug($message){
    if (isset($message)){
        $debug = fopen("log/debug.log","a"); //append
        fwrite($debug,$message."\n");
        fclose($debug);
    }
}

function escape_tags($inputString){
    $inputString = str_replace("<","&lt;",$inputString);
    return str_replace(">","&gt;",$inputString);
}


?>