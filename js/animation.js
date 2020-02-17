import Floater from '/cis273/js/floater.js';
import '/cis273/js/functions.js';

// //constants
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

//get the canvas
let canvas = document.getElementById("gameWrapper");
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


// canvas=$('#pad')[0]
//         context= canvas.getContext("2d")
//         pendown= false
        
//         $('#pad').mousemove(function(event)
//             {
//                 xpos = event.pageX - canvas.offsetLeft
//                 ypos = event.pageY - canvas.offsetTop
                
//                 if(pendown) context.lineTo(xpos, ypos)
//                 else        context.moveTo(xpos,  ypos)
                
//                 context.stroke()
            
            
//             })
            
//             $('#pad').mousedown(function() {pendown = true})
//             $('#pad').mouseup(function() {pendown = false})
//     var canvas = document.getElementById('gameWrapper');
//   var context = canvas.getContext('2d');

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







  let canvas2 = document.getElementById("pad");
  let ctx2 = canvas2.getContext('2d');

let thisObject = new Floater(GAME_WIDTH,GAME_HEIGHT);

thisObject.draw(ctx2);

let lastTime = 0;
function gameLoop(timestamp){
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx2.clearRect(0,0,800,600);

  thisObject.updatePosition(deltaTime);
  thisObject.draw(ctx2);
  
  requestAnimationFrame(gameLoop);
}

gameLoop();


let badGuy = new Array();
badGuy.push(new Floater(GAME_WIDTH, GAME_HEIGHT));

function addGuy(ctx, xpos, ypos){



}