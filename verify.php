<?php

	session_start();
	$DATABASE_HOST = 'localhost';
	$DATABASE_USER = 'root';
	$DATABASE_PASS = '';
	$DATABASE_NAME = 'cis273';

	$con = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);
	if (mysqli_connect_errno() ) {
		die ('Failed to connect: ' . mysqli_connect_error());
	}

	if( !isset($_POST['user'], $_POST['pass']) ) {
		die ('Please fill all fields');
	}

	if ($stmt = $con->prepare('SELECT id, password FROM accounts WHERE username = ?')) {
		$stmt->bind_param('s', $_POST['username']);
		$stmt->execute();
		$stmt->store_result();

		if ($stmt->num_rows > 0) {
			$stmt->bind_result($id, $password);
			$stmt->fetch();
			if (password_verify($_POST['password'], $password)) {
				session_regenerate_id();
				$_SESSION['loggedin'] = TRUE;
				$_SESSION['name'] = $_POST['username'];
				$_SESSION['id'] = $id;
				echo 'Hello ' . $_SESSION['name'];
			} else {
				echo 'Password incorrect.';
			}
		} else {
			echo 'Username incorrect.';
		}
		$stmt->close();
	}

?>