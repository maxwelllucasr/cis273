<?php
session_start();
session_unset();
include 'functions.php'; //adds functions to namespace

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

<?php if($_SESSION['loggedin']) { ?> <li style="font-size:1rem; color:white; background-color:black;padding:0.5rem 1rem; border-radius:10px;">Hello <?php echo $_SESSION['user']?></li><?php } ?>

    </ul>
    </nav>
 

    </div>
</header>
<body>
<!-- end header  -->