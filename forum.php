<?php
/*
*******************************
Food n' Boom'd
Forum page
Version 1
*******************************
*/

include 'PHP/header.php';
require 'PHP/mysqlCredentials.php';
?>
<?php 
	if (isset($_SESSION['loggedin'])) {
		$link = mysqli_connect($host, $un, $pass, $db);
		$query = "SELECT * FROM forum";
		$result = $link->query($query);

		if(isset($_POST['forumpost'])) {
			
			$postText = escape_tags($_POST['forumpost']);
			$query = "INSERT INTO `forum` (`id`, `author`, `date`, `post`)  VALUES (NULL, \"" . $_SESSION['user'] .  "\", CURDATE(), \"".$postText."\");";
			$link->query($query);
		}
?>
<section class="forum-container">
    <div class="container">
		<h1 class="page-header">Forum</h1>


		<?php
			if ($result->num_rows > 0) {
				// output data of each row
				while($row = $result->fetch_assoc()) {
					
					echo "<div class=\"forum-post-single\">";
						echo "<p class=\"author\">".$row['author']."</p>";
						echo "<p class=\"date\">".$row['date']."</p>";
						echo "<pre class=\"post\">".$row['post']."</pre>";
					echo "</div><hr>";

				}
			}
		?>
		<form name="theForum" class="forum-form" action="forum.php" onsubmit="return validateForm()" method="post">
			
			<p>
				<textarea placeholder="Add to the conversation..." class="forum-form-textarea" name="forumpost" maxlength="400"></textarea>
			</p>
			<h6>JavaScript code for characters left(out of 400) should go here...<h6>
			<input class="forum-form-submit" type="submit" value="Submit"/>
		</form>
    </div>
</section>

<?php
	}
	else if (!isset($_SESSION['loggedin'])) echo "<p style=\"text-align:center\">You must be logged in to access the Food n' Boom'd forum.</p>";
include 'PHP/footer.php';
?>