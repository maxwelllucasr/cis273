<?php
/*
*******************************
Food n' Boom'd
Index page
Version 1
*******************************
*/

include 'PHP/header.php';
?>

<section class="main-page-container">
    <div class="container">

    <h1 class="page-header">Home page</h1>

	
	<!-- <p>This site was created for the <i>Systems Concepts and Design</i> Course Project.</p> -->

    <div class="user-satisfaction-wrapper">
        <h2>User satisfaction</h2>
        <p>User satisfaction means everything to us, why not fill out our user satisfaction form <a href="media/UserSatisfactionFeedbackForm.xlsx" download>here</a>?</p>
    </div>


    <!-- Hardcoded for now, news database integration someday? -->
    <h2 class="main-page-header">News</h2>

        <!-- <div class="news-clipping">
            <h2>Boss unveiled for Food n' Boom'd</h2>
            <pre>APR 1st 2020</pre>
            <p>Our boss has been unveiled for our game <i>Food n' Boom'd</i>.  Click <a href="easteregg2">here</a> to get a sneak peak at what it is.</p>

            <a href="images/badMap.png"><img src="images/badMap.png"></a>
            
        </div> -->

        <div class="news-clipping">
            <h2>Images added to HTML5 Canvas, site features are up</h2>
            <pre>MAR 2020</pre>
            <p>Our first map!</p>

            <a href="images/badMap.png"><img src="images/badMap.png"></a>
            
        </div>

        <div class="news-clipping">
            <h2>HTML5 chosen for Food n' Boom'd</h2>
            <pre>FEB 2020</pre>
            <p>Oh yes we did!</p>
        
        </div>

        <div class="news-clipping">
            <h2>Project Started</h2>
            <pre>JAN 2020</pre>
            <p>And we're off!</p>
        
        </div>



    </div>
</section>

<?php
include 'PHP/footer.php';
?>