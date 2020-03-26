<?php
session_start();
// session_unset();
include 'functions.php'; //adds functions to namespace
if (isset($_POST['logout'])) session_unset();



?>

<!DOCTYPE html>

<head>
    <!-- jquery  -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <link rel="stylesheet" href="css/main.css">
    <html lang="en">
    <!-- close html in footer -->
</head>
<header>
    <div class="container">
    <img class="banner" src="images/Wider.png">


    <nav>
    <ul class="nav-ul">
		<li><a href="index.php">Home</a></li>
        <li><a href="game.php">Game</a></li>
        <li><a href="login.php">Login</a></li>
        <li><a href="registration.php">Registration</a></li>
        <li><a href="forum.php">Forum</a></li>

    <?php 
        if($_SESSION['loggedin']) { ?> 
        <li class="loggedintopright" style="font-size:1rem; color:white;padding:0.5rem 1rem; border-radius:10px;">
            Hello <?php echo $_SESSION['user']?>
            
            <div class="loggedinsubmenu">
                <form action="login.php" method="post">
                    <input class="logout-button" type="submit" value="Logout" name="logout">
                </form>
            </div>
        </li>
         <?php } ?>

    </ul>
    </nav>
 

    </div>
</header>
<body>
<!-- end header  -->