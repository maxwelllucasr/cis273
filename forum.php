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
<head>
	<script>
		function validateForm(form){
			messageToPost = form.firstName.value
			if (messageToPost==""){
				alert ("There is NOTHING in the text area!")
				return false
			else{
				return true
			}
		}
	</script>
</head>
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
		<form name="theForum" class="forum-form" action="forum.php" onsubmit="return validateForm(this)" method="post" >
			
			<p>
				<textarea id="forumTextArea" placeholder="Add to the conversation..." class="forum-form-textarea" name="forumpost" maxlength="400"></textarea>
			</p>
			<h6>Characters left: <span class="char-limit">400</span><h6> 
			<input class="forum-form-submit" type="submit" value="Submit"/>
		</form>
    </div>
</section>
<script type="module" src="js/charLimit.js"></script>
<?php
	}
	else if (!isset($_SESSION['loggedin'])) echo "<p style=\"text-align:center\">You must be logged in to access the Food n' Boom'd forum.</p>";
include 'PHP/footer.php';
?>
