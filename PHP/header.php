<?php
/*
*******************************
Food n' Boom'd
Header section
Version 1
*******************************
*/

session_start();
// session_unset();
include 'functions.php'; //adds functions to namespace
if (isset($_POST['logout'])) session_unset();

//Stop error reporting
ini_set('display_startup_errors', 0);
ini_set('display_errors', 1);
error_reporting(E_ERROR);

?>

<!DOCTYPE html>

<div class="popout-menu">
    <div class="hamburger-menu-popout-container"><img class="hamburger-menu hamburger hamburger-menu-popout" src="svg\bars.svg"></div>

    <ul>
        <li><a href="index">Home</a></li><hr>
        <li><a href="game">Game</a></li><hr>
        <li><a href="login">Login</a></li><hr>
        <li><a href="registration">Registration</a></li><hr>
        <li><a href="forum">Forum</a></li><hr>
        <li><a href="scoreboard">Scoreboard</a></li>

    </ul>



</div>
<div class="popout-background"></div>

<head>
    <!-- jquery  -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <link rel="stylesheet" href="css/main.css">
    <html lang="en">
    <!-- close html in footer -->
</head>
<header>
    <div class="container">
    <a href="index"><img class="banner" src="images/simpleLogo.png"></a>


    <nav>
    <div class="nav-container">
        <div class="nav-item">
                <img class="hamburger-menu hamburger" src="svg\bars.svg">
        </div>
		
    <?php 
        if(isset($_SESSION['loggedin'])) if ($_SESSION['loggedin']){ ?> 
        <div class="loggedintopright nav-item" style="font-size:1rem; color:white;padding: 1rem; border-radius:10px;">
            <span class="loggedin-hello">Hello</span> <?php echo $_SESSION['user']?>
            
            <div class="loggedinsubmenu">
                <form action="login.php" method="post">
                    <input class="logout-button" type="submit" value="Logout" name="logout">
                </form>
            </div>
        </div>
         <?php } ?>
         <!-- <li><img src="svg\bars.svg"></li> -->
        

        </div>
    
    </nav>
 

    </div>
</header>
<body>

    
<!-- end header  -->