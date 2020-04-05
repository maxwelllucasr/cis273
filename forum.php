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
			
			
			$query = "INSERT INTO `forum` (`id`, `author`, `date`, `post`)  VALUES (NULL, \"" . $_SESSION['user'] .  "\", CURDATE(), \"".$_POST['forumpost']."\");";
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
		<form class="forum-form" action="forum.php" method="post">
			
			<p>
				<textarea placeholder="Add to the conversation..." class="forum-form-textarea" name="forumpost"></textarea>
			</p>
			<input class="forum-form-submit" type="submit" value="Submit"/>
		</form>
    </div>
</section>

<?php
	}
	else if (!isset($_SESSION['loggedin'])) echo "<p style=\"text-align:center\">You must be logged in to access the Food n' Boom'd forum.</p>";
include 'PHP/footer.php';
?>