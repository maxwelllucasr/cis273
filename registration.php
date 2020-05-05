<?php
/*
*******************************
Food n' Boom'd
Registration page
Version 1
*******************************
*/

include 'PHP/header.php';
if (!isset($_SESSION['loggedin'])) include 'PHP/registrationSQL.php';

?>

<section>
    <div class="container registration-container">

    	<h1 class="page-header">Register</h1>


		<?php if (!isset($_SESSION['loggedin'])){ ?>

			<div class="registration-notice" style="font-size:0.8rem;">Password Requirements: None of these characters (.., ;, *, >, <), and username and password length must exceed 8 characters.</div>
			<form class="registration-form" action="registration.php" method = "post" autocomplete = "off">

				<input class="registration-field" type = "text" placeholder = "Username" name = "user" id="user" required>

				<input class="registration-field" type = "password" placeholder = "Password" name = "pass" id="pass" required>

				<input class="registration-field" type = "password" placeholder = "Retype Password" name = "pass2" id="pass2" required>

				<input class="registration-field" type = "email" name = "email" placeholder = "Email">

				<input class="registration-submit" type = "submit" value = "Register" name="registration-button">
			</form>
		<?php } else echo "<p class=\"success-notice\">You're logged in!</p>"; ?>

		<div class="dev-notice">Attention: This is a dev site.  Do not register or login with real passwords, as it isn't verifiably secure.</div>

    </div>
</section>

<?php
include 'PHP/footer.php';
?>