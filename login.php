<?php
include 'PHP/header.php';
?>

<section class="login-container">
    <div class="container">

    	<h1 class="page-header">Login</h1>

		<form class="login-form" action="verify.php" method = "post">

			<input type = "text" placeholder = "Username" name = "user" id="user" required>

			<input type = "text" placeholder = "Password" name = "pass" id="pass" required>
			
			<input class="login-submit" type = "submit" value = "Login">

		</form>
	
    </div>
</section>

<?php
include 'PHP/footer.php';
?>