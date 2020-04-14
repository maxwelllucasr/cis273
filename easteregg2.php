
<head>
    <link rel="stylesheet" href="css/main.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>


    

    <style>
        .ee-dot-1{
            position:absolute;
            height:3px;
            width:2px;
            left:10%;
            top:10%;
            background-color:black;
        }
        .ee-dot-2{
            position:absolute;
            height:2px;
            width:3px;
            left:20%;
            bottom:10%;
            background-color:black;
        }
        .ee-dot-3{
            position:absolute;
            height:1px;
            width:2px;
            right:60%;
            bottom:20%;
            background-color:black;
        }
        .ee-dot-4{
            position:absolute;
            height:1px;
            width:2px;
            right:70%;
            top:20%;
            background-color:black;
        }
        .ee-dot-5{
            position:absolute;
            height:2px;
            width:2px;
            right:10%;
            bottom:5%;
            background-color:black;
        }
		.ee-dot-6{
            position:absolute;
            height:2px;
            width:2px;
            right:35%;
            bottom:25%;
            background-color:black;
        }
		.ee-dot-7{
            position:absolute;
            height:2px;
            width:1px;
            right:66%;
            bottom:66%;
            background-color:black;
        }
        /* h2 span:before{
            position: absolute;
            height: 3px;
            width: 3px;
            background-color: black;
            content: "";
            top: 0.95rem;
            left: 7.465rem;
        } */
        body{
            position:relative;
            width:100%;
            overflow:hidden;
        }
        .no{
            display:none;
        }
        .thislittlec{
            transition-duration:5s;
            position:absolute;
        }
        .thislittlec-is-active{
            transition-duration:15s;
            transform: translate(-200px,100px);
            visibility:hidden;
        }
        .ee-right-text{
            margin-left:.8rem;
        }
        .msg-target{
            font-size:2rem;
        }
        .onepiecepic{
            max-height:40rem;
        }


    </style>
</head>

<body>

<h2>Find the <span class="thislittlec">c</span><span class="ee-right-text">orrect dot!</span></h2>

<div class="msg-target"></div>

<a class="ee-dot-1" title="You can't click me, neener neener"></a>
<a class="ee-dot-2" href="https://en.wikipedia.org/wiki/Trolling"></a>
<a class="ee-dot-3" href="https://youtu.be/Xh3zkzJpxdc"></a>
<div class="ee-dot-4" ></div>
<div class="ee-dot-5" title="Are you sure you want this?"></div>
<a class="ee-dot-6" href="https://youtu.be/HxkmXnRQblE"></a>
<a class="ee-dot-7" href="https://youtu.be/XbMx5LhbxUw?t=121"></a>




<audio controls id="no" class="no">
      <source src="media/no.mp3">
</audio>

</body>

<script>
        let audio = document.getElementById('no');

        jQuery(document).ready(function($){
            audio.volume = 0.05;

            $('.ee-dot-4').click(function(){
                audio.play();
            });

            $('.thislittlec').hover(function(){
                $(this).addClass('thislittlec-is-active');
            });

            $('.ee-dot-5').click(function(){
                $('.msg-target').append("You won!  The ultimate boss of FnB is");
                
                setTimeout(function(){
                    $('.msg-target').append(".");

                    setTimeout(function(){
                    $('.msg-target').append(".");

                        setTimeout(function(){
                        $('.msg-target').append(".");

                        setTimeout(function(){
                            $('.msg-target').append("<br><img class=\"onepiecepic\" src=\"images/onepiece.jfif\"><br><div style=\"margin-left:5rem;font-size:3rem\">The <span style=\"color:purple;\">Thanos One Piece!</span></div>");
                        },2000)

                        },1000)

                    },1000)
                    

                },1000)
                // setTimeout(function(){
                //     $('.msg-target').append(".");
                // },1000)
                // setTimeout(function(){
                //     $('.msg-target').append(".");
                // },1000)
            })
        });

</script>