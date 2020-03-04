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

// //constants
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

//get the canvas
let canvas = document.getElementById("gameWrapper");
//Context works in a fashion similar to elements in Javas Swing.
//Context is shared by all objects in the canvas.  It must be updated for most actions to the screen
let ctx = canvas.getContext('2d');




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
  canvas.addEventListener('mousemove', function(evt) {
    var mousePos = getMousePos(canvas, evt);
    var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
    writeMessage(canvas, message);
    
  }, false);








//The real demo

let canvas2 = document.getElementById("pad");
let ctx2 = canvas2.getContext('2d');


canvas2.addEventListener('mousemove', function(evt){

  var mousePos = getMousePos(canvas2, evt);
    var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;

}, false);


let numberOfBadGuys = 1;
let numberOfTowers = 5;
let numberOfPathPoints = 8;
let towerProximity = 150;
let pathPointProximity = 1;

let badguy = new Array();
let projectile = new Array();
let tower = new Array();
let pathPoint = new Array();



//this is how to make multiple bad guys...

for (let i = 0; i < numberOfBadGuys; i++){
  badguy.push(new Floater(GAME_WIDTH,GAME_HEIGHT,"badguy"));
}

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

badguy[0].position.x = 100;
badguy[0].position.y = 100;
badguy[0].width = 10;
badguy[0].height = 10;

for(let i = 0; i < numberOfBadGuys; i++){
  badguy[i].draw(ctx2);
}

function gameLoop(timestamp){
  

  //resets all update slope booleans to false so createslope in updateposition()
  //isnt run every frame
  if (!metadata.isFirstRound) {
    //all floaters
    for(var i = 0; i < numberOfBadGuys; i++) badguy[i].updateSlope = false;
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


      metadata.firstFrame = true;
    }

    //ClearRect is a context method that clears screen
    ctx2.clearRect(0,0,800,600);


    //tower proximity check & projectile generation
    for (let i = 0; i < numberOfTowers; i++){
      for (let j = 0; j < numberOfBadGuys; j++){

      if (distance(tower[i].position.x, badguy[j].position.x, tower[i].position.y, badguy[j].position.y) < towerProximity) 
      {
      

        //Projectiles are meant to be "fire and forget".  A slope is determined for the projectile ONCE
        //and the projectile isn't heard of again.  Projectiles either need to be despawned 

        if (!tower[i].activeProjectile){
          var direction;
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


    //bad guy waypoint proximity check

    // for (let i = 0; i < numberOfPathPoints; i++){
        for (let j = 0; j < numberOfBadGuys; j++){

        if (distance(pathPoint[badguy[j].currentHeading].position.x, badguy[j].position.x, pathPoint[badguy[j].currentHeading].position.y, badguy[j].position.y) < pathPointProximity){
              
          if(badguy.length - 1 != badguy[j].currentHeading){
            

            //update only if current heading is NOT one under number of path points
            if(badguy[j].currentHeading != numberOfPathPoints ) {
                badguy[j].currentHeading = badguy[j].currentHeading + 1; 
            }

            
            if(badguy[j].currentHeading == numberOfPathPoints )
            {
                metadata.isStarted = false;
                metadata.isGameOver = true;
                badguy[j].currentHeading--;
            }

          }
          }
        }
      // }



    //Depth is determined by how high or low your draw method is. 
    //The lower in this gameloop, the higher it is


    //Update changes xy coordinates
    for(let i = 0; i < numberOfBadGuys; i++){
      badguy[i].updatePosition(deltaTime, pathPoint);
    }

    ctx2.fillStyle = "#000000";

    //Draw redraws the object... 
    for(let i = 0; i < numberOfBadGuys; i++){
      badguy[i].draw(ctx2);
    }

    ctx2.fillStyle = "#ff0000";

    for(let i = 0; i < numberOfTowers; i++){
      tower[i].draw(ctx2);
    }

    ctx2.fillStyle = "#0000ff";

    for(let i = 0; i < numberOfPathPoints; i++){
      pathPoint[i].draw(ctx2);
    }

  //Projectile update position
  for(let i = 0; i < projectile.length; i++){
    projectile[i].updatePosition(deltaTime, pathPoint);
  }

  ctx2.fillStyle = "#999999";
  //Draw redraws the object... 
  for(let i = 0; i < projectile.length; i++){
    projectile[i].draw(ctx2);
  }
}
//END ISSTARTED

  if ((!metadata.isStarted)&&(metadata.isGameOver)){
    gameMessage("Game Over",ctx2,GAME_WIDTH,GAME_HEIGHT);
  }
  else if (!metadata.isStarted) {
    gameMessage("Start",ctx2,GAME_WIDTH,GAME_HEIGHT);
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

  //This is calling gameloop and passing the timestamp to it, basically.  Integral to the gameloop.
  requestAnimationFrame(gameLoop); 
}



//First canvas stuff

//make objects using floater class
let myObject = new Floater(GAME_WIDTH, GAME_HEIGHT);
let yourObject = new Floater(GAME_WIDTH, GAME_HEIGHT);

//green
ctx.fillStyle = '#1f1';

//using the default dimensions in the class constructor over in floater
myObject.draw(ctx);  

//gray
ctx.fillStyle = '#555';
//overriding constructor defaults on second block
yourObject.height = 50;
yourObject.position.x = 150;
yourObject.draw(ctx);


ctx.fillStyle = '#1f1';
ctx.fillRect(10,10,20,20)

gameLoop();

