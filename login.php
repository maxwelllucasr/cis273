<?php
/*
*******************************
Food n' Boom'd
Login page
Version 1
*******************************
*/

include 'PHP/header.php';
include 'PHP/loginSQL.php';


?>

<section class="login-container">
    <div class="container">

    	<h1 class="page-header">Login</h1>

		<?php if(!isset($_SESSION['loggedin'])) { ?>

			<form class="login-form" action="login.php" method = "post">

				<input class="login-field" type = "text" placeholder = "Username" name = "user" id="user" required="Username is required">

				<input class="login-field" type = "password" placeholder = "Password" name = "pass" id="pass" required="Password is required">
				
				<input class="login-submit" type = "submit" value = "Login" name="login-button">

			</form>
 
		<?php } else echo "<p class=\"success-notice\">You're logged in!</p>";?>
	
		<?php if (isset($message)) {echo $message;} ?>

		<div class="dev-notice" style="margin-top:5rem">Attention: This is a dev site.  Do not register or login with real passwords, as it isn't verifiably secure.</div>

    </div>
</section>

<?php

include 'PHP/footer.php';
?>