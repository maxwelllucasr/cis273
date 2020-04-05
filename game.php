<?php
/*
*******************************
Food n' Boom'd
Game page
Version 1
*******************************
*/

include 'PHP/header.php';
?>

<section class="game-container">
    <div class="container" style="position:relative">
       
       <a title="Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It’s not a story the Jedi would tell you. It’s a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life… He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful… the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic. He could save others from death, but not himself." class="game-easter-egg" href="easteregg.php"></a>
        <!-- remove this later, just for context -->
        
        <canvas id="pad"  height="600" width="800">
            <h1>HTML5 NOT SUPPORTED</h1>
        </canvas>

        <!-- <canvas id="gameWrapper" height="600" width="800">
            Only displays if HTML5 isnt supported
            <h1>HTML5 NOT SUPPORTED</h1>
        </canvas> -->


    </div>

    <audio controls id="musicplayer" class="musicplayer">
      <source src="media/lifeanddeath.mp3">
    </audio>
    <audio controls id="gameoverplayer" class="gameoverplayer">
      <source src="media/game-over.mp3">
    </audio>

    <div class="pause">
        <img class="pause-button" src="images/pause.png">
        <img class="play-button is-active" src="images/play.png">
    </div>
<!-- 
    <div class="cast" style="font-family:arial; background-color:whitesmoke; width:20%; margin:1rem auto; display:block; border-radius:20px; text-align:center; padding:1rem; font-weight:bold">
            <h1>Starring:</h1>
            <p style="color:red">Towers</p>
            <p style="color:blue">Waypoints</p>
            <p style="color:black">Bad guys</p>
            <p style="color:gray">Projectiles</p>
        </div> -->

    <div class="mobile-notice">
        <p><?php if($_SESSION['loggedin']) echo "Hello ".$_SESSION['user'] . ","; else echo "Hello guest,";?></p>
        <p>Since you're viewing this in a mobile viewport, you will be unable to play Food n' Boom'd.</p>
    </div>

</section>



<?php
include 'PHP/footer.php';
?>