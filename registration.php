<?php
include 'PHP/header.php';
if (!isset($_SESSION['loggedin'])) include 'PHP/registrationSQL.php';

?>

<section>
    <div class="container registration-container">

    	<h1 class="page-header">Register</h1>


		<?php if (!isset($_SESSION['loggedin'])){ ?>

			<div class="registration-notice" style="font-size:0.8rem;">For security reasons, you aren't allowed to include asterisks, less than or greater than symbols, or semicolons in your username and password.</div>
			<form class="registration-form" action="registration.php" method = "post" autocomplete = "off">

				<input class="registration-field" type = "text" placeholder = "Username" name = "user" id="user" required>

				<input class="registration-field" type = "password" placeholder = "Password" name = "pass" id="pass" required>

				<input class="registration-field" type = "password" placeholder = "Retype Password" name = "pass2" id="pass2" required>

				<input class="registration-field" type = "email" name = "email" placeholder = "Email">

				<input class="registration-submit" type = "submit" value = "Register" name="registration-button">
			</form>
		<?php } else echo "<p style=\"text-align:center;\">You're logged in!</p>"; ?>

		<div class="dev-notice">Attention: This is a dev site.  Do not register or login with real passwords, as it isn't verifiably secure.</div>

    </div>
</section>

<?php
include 'PHP/footer.php';
?>