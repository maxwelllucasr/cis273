import Floater from '/cis273/js/floater.js';
import '/cis273/js/functions.js';

// //constants
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

//get the canvas
let canvas = document.getElementById("gameWrapper");
//Context works in a fashion similar to elements in Javas Swing.
//Context is shared by all objects in the canvas.  It must be updated for most actions to the screen
let ctx = canvas.getContext('2d');

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
    console.log(message);
    
  }, false);








//The real demo

let canvas2 = document.getElementById("pad");
let ctx2 = canvas2.getContext('2d');

let numberOfBadGuys = 5;

let badguy = new Array();

//this is how to make multiple bad guys...

for (let i = 0; i < numberOfBadGuys; i++){
  badguy.push(new Floater(GAME_WIDTH,GAME_HEIGHT));
}

badguy[1].position.x = 200;
badguy[1].position.y = 30;
badguy[1].width = 10;
badguy[1].height = 10;
console.log(badguy[1]);
console.log(badguy[2]);

for(let i = 0; i < numberOfBadGuys; i++){
  badguy[i].draw(ctx2);
}

let lastTime = 0;
function gameLoop(timestamp){
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  //Testing
  // if(timestamp) console.log(timestamp);

  //ClearRect is a context method that clears screen
  ctx2.clearRect(0,0,800,600);

  //Before we can update the xy coordinates, we need to find the line of each of the floaters.

  
  //Update changes xy coordinates
  for(let i = 0; i < numberOfBadGuys; i++){
    badguy[i].updatePosition(deltaTime);
  }
  //Draw redraws the object... 
  for(let i = 0; i < numberOfBadGuys; i++){
    badguy[i].draw(ctx2);
  }

  //This is calling gameloop and passing the timestamp to it, basically.  Integral to the gameloop.
  requestAnimationFrame(gameLoop); 
}

gameLoop();


let badGuy = new Array();
badGuy.push(new Floater(GAME_WIDTH, GAME_HEIGHT));

function addGuy(ctx, xpos, ypos){



}