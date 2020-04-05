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

?>