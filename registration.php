<?php
include 'PHP/header.php';
?>

<section>
    <div class="container registration-container">

    	<h1 class="page-header">Register</h1>

			<form action="verify.php" method = "post" autocomplete = "off">

				<input class="registration-field" type = "text" placeholder = "Username" name = "user" id="user" required>

				<input class="registration-field" type = "text" placeholder = "Password" name = "pass" id="pass" required>

				<input class="registration-field" type = "text" placeholder = "Retype Password" name = "pass2" id="pass2" required>

				<input class="registration-field" type = "email" name = "email" placeholder = "Email">

				<input type = "submit" value = "Register">

    </div>
</section>

<?php
include 'PHP/footer.php';
?>