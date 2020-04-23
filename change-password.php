<?php 
/*
*******************************
Food n' Boom'd
Change Password page
Version 1
*******************************
*/

    include 'PHP/header.php';

    if(isset($_POST['changepass'])){

        if (isset($_POST['newpass']) && isset($_POST['newpass2'])){

            if ($_POST['newpass'] == $_POST['newpass2']){
                include 'PHP/mysqlCredentials.php';
                $link = mysqli_connect($host, $un, $pass, $db);
                if ($link->connect_error) {
                    die("Connection failed: " . $link->connect_error);
                } 
                $pass = escape_tags($_POST['newpass']); //fnb function

                $salt = random_bytes(16);
                $salted = $salt.$pass;
                $hash = hash('sha256', $salted);

                $result = $link->prepare("UPDATE user SET pass = ?, salt = ? WHERE user = ?");
                $result->bind_param('sss',$hash, $salt, $_SESSION['user']);
                $result->execute();
                $result->store_result();

                echo "Password changed!"; 

                // if ($result->num_rows == 1){
                // }

            }
            else echo "Passwords do not match";
        }
    }



?>

    <section class="change-pass-section">
        <?php if($_SESSION['loggedin']){ ?>
            <h1 style="text-align:center">Change password</h1>

            <form action="change-password.php" method="POST">
                <input type="password" name="newpass" placeholder="Password">
                <input type="password" name="newpass2" placeholder="Re-enter">
                <input type="submit" value="Submit" name="changepass">
            </form>

        <?php } else echo "<p style=\"text-align:center\">You're not logged in!</p>";?>

    </section>

<?php
    include 'PHP/footer.php';
?>