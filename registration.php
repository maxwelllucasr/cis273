<?php
include 'PHP/header.php';
?>

<section>
    <div class="container">

    	<h1>Register</h1>

			<form action="verify.php" method = "post" autocomplete = "off">

				<input type = "text" placeholder = "Username" name = "user" id="user" required>

				<input type = "text" placeholder = "Password" name = "pass" id="pass" required>

				<input type = "text" placeholder = "Retype Password" name = "pass2" id="pass2" required>

				<input type = "email" name = "email" placeholder = "johnnyappleseed123@gmail.com">

				<input type = "submit" value = "Register">

    </div>
</section>

<?php
include 'PHP/footer.php';
?>