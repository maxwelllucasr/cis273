<?php
include 'PHP/header.php';
require 'PHP/mysqlCredentials.php';
?>
<?php 
	if ($_SESSION['loggedin']) {
?>
<section class="forum-container">
    <div class="container">
		<h1 class="page-header">Forum</h1>

		<form action="forum.php" method="post">
			
			<input type="text" name="forumpost"/>
			<input type="submit" value="Submit"/>
		</form>
    </div>
</section>

<?php
	}
	else echo "<p style=\"text-align:center\">You must be logged in to access the Food n' Boom'd forum.</p>";
include 'PHP/footer.php';
?>