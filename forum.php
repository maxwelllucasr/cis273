<?php
include 'PHP/header.php';
?>
<?php 
	echo $_POST["forumpost"]; 
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
include 'PHP/footer.php';
?>