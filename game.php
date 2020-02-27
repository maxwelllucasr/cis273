<?php
include 'PHP/header.php';
?>

<section class="game-container">
    <div class="container">
        <canvas id="gameWrapper" height="600" width="800">
            <!-- Only displays if HTML5 isnt supported -->
            <h1>HTML5 NOT SUPPORTED</h1>
        </canvas>

        <!-- remove this later, just for context -->
        <div class="cast" style="font-family:arial; background-color:whitesmoke; width:20%; margin:1rem auto; display:block; border-radius:20px; text-align:center; padding:1rem; font-weight:bold">
            <h1>Starring:</h1>
            <p style="color:red">Towers</p>
            <p style="color:blue">Waypoints</p>
            <p style="color:black">Bad guys</p>
            <p style="color:gray">Projectiles</p>
        </div>


        <canvas id="pad"  height="600" width="800">

        </canvas>

    </div>

    <audio controls class="musicplayer">
      <source src="media/lifeanddeath.mp3">
    </audio>








</section>



<?php
include 'PHP/footer.php';
?>