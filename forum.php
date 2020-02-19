<?php
include 'PHP/header.php';
?>
<?php 
	echo $_POST["forumpost"]; 
?>
<section class="forum-container">
    <div class="container">
		<form action="forum.php" method="post">
			Forum
			<input type="text" name="forumpost"/>
			<input type="submit" value="Submit"/>
		</form>
    </div>
</section>

<?php
include 'PHP/footer.php';
?>