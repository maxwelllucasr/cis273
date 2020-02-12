import Floater from '/cis273/js/floater.js';

//constants
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


// ctx.fillStyle = '#1f1';
// ctx.fillRect(10,10,20,20)
