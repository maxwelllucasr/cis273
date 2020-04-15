/*
*******************************
Food n' Boom'd
Animation JS
Version 1
*******************************
*/

import Floater from './floater.js';
import Static from './static.js';
import Meta from './meta.js';
import './functions.js';
import {distance, createSlope} from './functions.js';

var metadata = new Meta();
// $

function gameMessage(string, context, GAME_WIDTH, GAME_HEIGHT){
  context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  context.fillStyle = 'black';
  context.fillRect(0,0,GAME_WIDTH,GAME_HEIGHT);

  context.font = "30px Arial";
  context.fillStyle = 'white';
  context.fillText(string, GAME_WIDTH/2 -30, GAME_HEIGHT/2);

 
}

let audio = document.getElementById('musicplayer');
let gameoverplayer = document.getElementById('gameoverplayer');

    $('#pad').click(function(){
        audio.play();
        $('.pause-button').addClass('is-active');
        $('.play-button').removeClass('is-active');

    });
    $('.pause').click(function(){
      $(this).children().toggleClass('is-active');
        if($('.pause-button').hasClass('is-active')) audio.play();
        else if($('.play-button').hasClass('is-active')) audio.pause();

    })

// //constants
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

//get the canvas
// let canvas = document.getElementById("gameWrapper");
//Context works in a fashion similar to elements in Javas Swing.
//Context is shared by all objects in the canvas.  It must be updated for most actions to the screen
// let ctx = canvas.getContext('2d');




//Dont need this, good for demonstration.  Console.log does it just fine
function writeMessage(canvas, message) {
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.font = '18pt Calibri';
    context.fillStyle = 'black';
    context.fillText(message, 1, 25);
}

//Need this
  function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }

  //need this
  // canvas.addEventListener('mousemove', function(evt) {
  //   var mousePos = getMousePos(canvas, evt);
  //   var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
  //   writeMessage(canvas, message);
    
  // }, false);








//The real demo

let canvas2 = document.getElementById("pad");
let ctx2 = canvas2.getContext('2d');


canvas2.addEventListener('mousemove', function(evt){

  var mousePos = getMousePos(canvas2, evt);
    // var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;

}, false);


let numberOfBadGuys = 2;
let numberOfTowers = 5;
let numberOfPathPoints = 8;
let towerProximity = 150;
let pathPointProximity = 1;

let badguy = new Array();
let projectile = new Array();
let tower = new Array();
let pathPoint = new Array();



//this is how to make multiple bad guys...

// for (let i = 0; i < numberOfBadGuys; i++){
//   badguy.push(new Floater(GAME_WIDTH,GAME_HEIGHT,"badguy"));
// }

for (let i = 0; i < numberOfTowers; i++){
  tower.push(new Static("tower"));
}

for (let i = 0; i < numberOfPathPoints; i++){
  pathPoint.push(new Static("path"));
  pathPoint[i].width = 10;
  pathPoint[i].height = 10;
  pathPoint[i].position.x = i * 20 + 30;
}

pathPoint[0].position.x = 100;
pathPoint[0].position.y = 100;

pathPoint[1].position.x = 300;
pathPoint[1].position.y = 150;

pathPoint[2].position.x = 550;
pathPoint[2].position.y = 250;

pathPoint[3].position.x = 650;
pathPoint[3].position.y = 200;

pathPoint[4].position.x = 750;
pathPoint[4].position.y = 350;

pathPoint[5].position.x = 600;
pathPoint[5].position.y = 550;

pathPoint[6].position.x = 300;
pathPoint[6].position.y = 500;

pathPoint[7].position.x = 100;
pathPoint[7].position.y = 400;

let towerImage = new Image();
let backgroundImage = new Image();
let bombImage = new Image();
let milkCarton = new Image();
let projectileImg = new Image();

towerImage.src = "images/milkCarton.png";
backgroundImage.src = "images/badMap.png";
bombImage.src = "images/smileyBomb.png";
milkCarton.src = "images/fridge.png";
projectileImg.src = "images/snowball.png";

for(let i = 0; i < metadata.currentBadguy; i++){
  badguy[i].draw(ctx2);
}

function gameLoop(timestamp){
  

  //resets all update slope booleans to false so createslope in updateposition()
  //isnt run every frame
  if (!metadata.isFirstRound) {
    //all floaters
    for(var i = 0; i < metadata.currentBadguy; i++) badguy[i].updateSlope = false;
    for(var i = 0; i < projectile.length; i++) projectile[i].updateSlope = false;
  }
  
  
  if (metadata.isStarted){
    //A delta time is a "time since last event" variable. 
    //We use it in a calculation for updatePosition to maintain consistency.
    let deltaTime = timestamp - metadata.lastTime;
    metadata.lastTime = timestamp;

    if (!metadata.firstFrame) {
      metadata.firstTimestamp = metadata.lastTime;
      console.log("Start time: " + metadata.firstTimestamp);

      //Spawn first badguy
      if(numberOfBadGuys>0){
          badguy.push(new Floater(GAME_WIDTH,GAME_HEIGHT,"badguy"));
          metadata.lastBadGuySpawnTimestamp = timestamp;

          badguy[0].position.x = 100;
          badguy[0].position.y = 100;
          badguy[0].width = 10;
          badguy[0].height = 10;
          metadata.currentBadguy++;

      }
      metadata.firstFrame = true;
    }

    //ClearRect is a context method that clears screen
    ctx2.clearRect(0,0,800,600);
    ctx2.drawImage(backgroundImage,0,0);


    //Badguy generation
    if (timestamp > metadata.lastBadGuySpawnTimestamp + metadata.badguySpawnTime ){
      //If we still have bad guys to spawn
      if (metadata.currentBadguy < numberOfBadGuys){
        //Spawn bad guy
          badguy.push(new Floater(GAME_WIDTH,GAME_HEIGHT,"badguy"));
          metadata.lastBadGuySpawnTimestamp = timestamp;
          metadata.currentBadguy++;

          badguy[metadata.currentBadguy-1].position.x = 100;
          badguy[metadata.currentBadguy-1].position.y = 100;
          badguy[metadata.currentBadguy-1].width = 10;
          badguy[metadata.currentBadguy-1].height = 10;
      }
    }


    //tower proximity check & projectile generation
    for (let i = 0; i < numberOfTowers; i++){
      for (let j = 0; j < metadata.currentBadguy; j++){
        if(badguy[j].isDead==false){  
      if (distance(tower[i].position.x, badguy[j].position.x, tower[i].position.y, badguy[j].position.y) < towerProximity) 
      {
      
        if(tower[i].towerTime < (timestamp - tower[i].lastShotTime) && tower[i].activeProjectile) {
            tower[i].activeProjectile = false;
            // console.log("working");
        }
        //Projectiles are meant to be "fire and forget".  A slope is determined for the projectile ONCE
        //and the projectile isn't heard of again.  Projectiles either need to be despawned 
        
        if (!tower[i].activeProjectile){
          var direction;
          tower[i].towerTime = timestamp;

          if((tower[i].position.x > badguy[j].position.x)&&(tower[i].position.y > badguy[j].position.y)){
            direction = "topleft";
          }
          else if((tower[i].position.x < badguy[j].position.x)&&(tower[i].position.y > badguy[j].position.y)){
            direction = "topright";
          }
          else if((tower[i].position.x > badguy[j].position.x)&&(tower[i].position.y < badguy[j].position.y)){
            direction = "bottomleft";
          }
          else if((tower[i].position.x < badguy[j].position.x)&&(tower[i].position.y < badguy[j].position.y)){
            direction = "bottomright";
          }

          let projectileSlope = createSlope(tower[i].position.x, badguy[j].position.x, tower[i].position.y, badguy[j].position.y)
          projectile.push(new Floater(GAME_WIDTH,GAME_HEIGHT, "projectile", projectileSlope ))
          
          //find most recent added projectile, give it the position of the tower it originated from
          projectile[projectile.length - 1].position.x = tower[i].position.x + 15;
          projectile[projectile.length - 1].position.y = tower[i].position.y + 15;

          //who shot it?  Might be useful if we need to despawn projectiles to give turrets the ability to fire second shots.
          projectile[projectile.length - 1].towerDaddy = i;

          projectile[projectile.length - 1].direction = direction;
    
        }
        //tells the tower to not shoot anymore, hardcoded for now, fix later
        tower[i].activeProjectile = true;

      }
      }
    }
    }
    for (let i = 0; i < projectile.length; i++){
      for (let j = 0; j < metadata.currentBadguy; j++){


          if(distance(projectile[i].position.x, badguy[j].position.x, projectile[i].position.y, badguy[j].position.y) < badguy[j].hitbox) {
            // console.log(badguy[j].hp);

          if (badguy[j].hp > 0){
            /*
            -Luke
            currentlyHit makes no sense now, we're asking if its currently hit and if not,
            set currently hit to true and decrement HP.  Immediately afterwards, we ask
            if currently hit is true, and set to false if true.  Very redundant, is there a use
            for this boolean?           
            */
              if(!badguy[j].currentlyHit){
                badguy[j].hp--;
                badguy[j].currentlyHit = true;
                // console.log(badguy[j].hp);
              }
            }

            else if (badguy[j].hp == 0){
              //Kill badguy here
              // console.log("Badguy " + j + " is dead")
              badguy[j].death(metadata)



            }
              
            if(badguy[j].currentlyHit){
              badguy[j].currentlyHit = false;
            }
          }
          
      }
    } 
    //bad guy waypoint proximity check

    // for (let i = 0; i < numberOfPathPoints; i++){
        for (let j = 0; j < metadata.currentBadguy; j++){

        if (distance(pathPoint[badguy[j].currentHeading].position.x, badguy[j].position.x, pathPoint[badguy[j].currentHeading].position.y, badguy[j].position.y) < pathPointProximity){
   

          //No idea what this does, dont remember adding it, it breaks the game
          // if(badguy.length - 1 != badguy[j].currentHeading){ 
            

            //update only if current heading is NOT one under number of path points
            if(badguy[j].currentHeading != numberOfPathPoints ) {
                badguy[j].currentHeading = badguy[j].currentHeading + 1; 
                // console.log(badguy[0].currentHeading)

            }

            
            if(badguy[j].currentHeading == numberOfPathPoints )
            {

                if(!metadata.isGameOver) {
                  audio.pause();
                  gameoverplayer.play();
                  $('.pause').children().toggleClass('is-active');


                  //Ajax send high score to DB
                  $.ajax({
                    type: "POST",
                    url: "PHP/highscoreController.php", 
                    data : {
                      score : metadata.score,
                    }
                  //   success: function (data) {
                  //     document.write(data);
  
                  // }
                  
                  // post.done(
                  //   console.log("Gameover, post sent")
                  // )
                  })
                }


                console.log("gameover");
                metadata.isStarted = false;
                metadata.isGameOver = true;
                badguy[j].currentHeading--;
            }

          // }
          }
        
        }
      // }



    //Depth is determined by how high or low your draw method is. 
    //The lower in this gameloop, the higher it is


    //Update changes xy coordinates
    for(let i = 0; i < metadata.currentBadguy; i++){
      if(!badguy[i].isDead){
        badguy[i].updatePosition(deltaTime, pathPoint);
        ctx2.drawImage(bombImage,badguy[i].position.x,badguy[i].position.y,50,50);
      }
    }

    // ctx2.fillStyle = "#000000";

    //Draw redraws the object... 
    // for(let i = 0; i < metadata.currentBadguy; i++){
    //   // badguy[i].draw(ctx2);
    //   ctx2.drawImage(bombImage,badguy[i].position.x,badguy[i].position.y,50,50);
    // }

    ctx2.fillStyle = "#ff0000";
    for(let i = 0; i < numberOfTowers; i++){
      // tower[i].draw(ctx2);
      ctx2.drawImage(towerImage, tower[i].position.x, tower[i].position.y,50,100);


    }

    // ctx2.fillStyle = "#0000ff";

    //
    // for(let i = 0; i < numberOfPathPoints; i++){
    //   pathPoint[i].draw(ctx2);
    // }
      ctx2.drawImage(milkCarton, pathPoint[pathPoint.length-1].position.x, pathPoint[pathPoint.length-1].position.y,70,100);

  //Projectile update position
  for(let i = 0; i < projectile.length; i++){
   projectile[i].updatePosition(deltaTime, pathPoint);
 }

  ctx2.fillStyle = "#999999";
  //Draw redraws the object... 
  for(let i = 0; i < projectile.length; i++){
    // projectile[i].draw(ctx2);
      ctx2.drawImage(projectileImg,projectile[i].position.x,projectile[i].position.y,20,20);
  }
}
//END IS STARTED

  if ((!metadata.isStarted)&&(metadata.isGameOver)){
    gameMessage("Game Over",ctx2,GAME_WIDTH,GAME_HEIGHT);
    console.log("Score: "+metadata.score)
  }
  else if (!metadata.isStarted) {
    gameMessage("Level "+metadata.currentLevel,ctx2,GAME_WIDTH,GAME_HEIGHT);
  }
  else if (metadata.winCondition){
    gameMessage("Mission Complete",ctx2,GAME_WIDTH,GAME_HEIGHT);

    canvas2.onclick = function(){
      //reset everything, start the game over again with incremented level.
      console.log(metadata)
      let tempScore = metadata.score
      let tempLevel = metadata.currentLevel
      metadata = new Meta()
      console.log(metadata)

      tower = null
      tower = new Array()
      numberOfTowers++

      for (let i = 0; i < numberOfTowers; i++){
        tower.push(new Static("tower"));
      }

      projectile = null
      projectile = new Array()

      badguy = null
      badguy = new Array()

      metadata.currentLevel = tempLevel + 1;
      metadata.score = tempScore

      //BUFFS
      if (numberOfBadGuys < 20) numberOfBadGuys = numberOfBadGuys * 2
      else if (numberOfBadGuys < 50) numberOfBadGuys = numberOfBadGuys * 1.3
      else if (numberOfBadGuys < 100) numberOfBadGuys = numberOfBadGuys * 1.1


      if (metadata.badguySpawnTime > 200) metadata.badguySpawnTime = metadata.badguySpawnTime - 200
      else if (metadata.badguySpawnTime > 10) metadata.badguySpawnTime = metadata.badguySpawnTime - 10;

    }
 }

  //If all badguys are spawned
  if (numberOfBadGuys == metadata.currentBadguy){
    let flag = false
    //Loop through all bad guys
    for(let i = 0; i < numberOfBadGuys; i++){
      if (!badguy[i].isDead) flag = true;
      // if (badguy[j].isDead) metadata.winCondition = true;
    }
    if (!flag) metadata.winCondition = true;
    // let isGood = (currentValue) => currentValue == true;
    // if (badguy.isDead.every(isGood)) console.log("you won")
  }

  if(metadata.isFirstRound) {
    canvas2.onclick = function(){
      if(!metadata.isGameOver && !metadata.isStarted) {
        metadata.isStarted = true;   
      }

      //Tower placement
      else if(metadata.isPlacingPhase){
        console.log(getMousePos(canvas2,event));

        let towerPosition = getMousePos(canvas2,event);
        let towerPositionX = towerPosition.x;
        let towerPositionY = towerPosition.y;

        tower[metadata.currentTower].position.x = towerPositionX;
        tower[metadata.currentTower].position.y = towerPositionY;

        //Jump to next tower
        metadata.currentTower++;

        //stop placing if reached max number of towers
        if (metadata.currentTower == numberOfTowers) metadata.isPlacingPhase = false;
      }  

    }
    
    
    metadata.isFirstRound = false;
  }
  if(metadata.isStarted) {
    gameMessage(Math.abs(metadata.currentTower - numberOfTowers),ctx2,70,50)


  }

  //This is calling gameloop and passing the timestamp to it, basically.  Integral to the gameloop.
  if (!metadata.isGameOver) requestAnimationFrame(gameLoop); 
}



//First canvas stuff

// //make objects using floater class
// let myObject = new Floater(GAME_WIDTH, GAME_HEIGHT);
// let yourObject = new Floater(GAME_WIDTH, GAME_HEIGHT);

// //green
// ctx.fillStyle = '#1f1';

// //using the default dimensions in the class constructor over in floater
// myObject.draw(ctx);  

// //gray
// ctx.fillStyle = '#555';
// //overriding constructor defaults on second block
// yourObject.height = 50;
// yourObject.position.x = 150;
// yourObject.draw(ctx);


// ctx.fillStyle = '#1f1';
// ctx.fillRect(10,10,20,20)

gameLoop();

