<?php
include 'PHP/header.php';
require 'PHP/mysqlCredentials.php';

    $query = "SELECT * FROM `user` ORDER BY score DESC LIMIT 10";
    $link = mysqli_connect($host, $un, $pass, $db);
    $result = $link->query($query);
?>

<section class="scoreboard-container">

    <div class="scoreboard-content">
        <div class="scoreboard-content-inner">These are the top ten high score holders in Food n' Boom'd.</div>
        <div class="scoreboard-content-inner">This list is not manually adjusted, data is updated on gameover screens via a PHP script by using AJAX.  </div>
        <div class="scoreboard-content-inner">Additionally, guests and logged in users have their scores logged in log/scoreLog on a gameover screen.</div>

    </div>
    <table>
        <tr>
            <th>User</th>
            <th>Score</th>
        </tr>
    <?php

        if($result->num_rows > 0){
            while($row = $result->fetch_assoc()) { ?>
                
                <tr>
                    <td><?=$row['user']?></td>
                    <td><?=$row['score']?></td>
                </tr>

            <?php }
        }

    ?>
    </table>
    <div class="tail"></div>
</section>

<?php
include 'PHP/footer.php';
?>