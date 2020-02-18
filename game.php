<?php
include 'PHP/header.php';
?>

<section class="game-container">
    <div class="container">
        <canvas id="gameWrapper" height="600" width="800">
            <!-- Only displays if HTML5 isnt supported -->
            <h1>HTML5 NOT SUPPORTED</h1>
        </canvas>

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