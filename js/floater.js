import {fraction} from "/cis273/js/frac.js";
// import {HCF} from '/cis273/js/frac.js';
import {createSlope} from '/cis273/js/functions.js';

export default class Floater{

    constructor(gameWidth, gameHeight){
        //default height/width for new block
        this.width = 100;
        this.height = 100;


        //default position for new class
        this.position = {
            x : 10,
            y : 10

        }
    }

    //Method takes context object as input and uses object x, y, width and height variables to redraw rectangle
    draw(ctx){
        // ctx.fillStyle = "#49b526";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }




    updatePosition(deltaTime){

        if (!deltaTime) return;


        //fraction function works
        // console.log(fraction(0.5));


        //Takes decimal as input, outputs numerator as numAndDem[1] and denominator as numAndDem[2]
        // let decimalSlope = fraction(-5.5);
        // // console.log(decimalSlope);
        // let numAndDem = decimalSlope.split('/');
        // console.log(numAndDem);


        // console.log(line.numerator + "/" + line.denominator);
       
       //x1, x2, y1, y2
    //    var slope = null;
  
        let slope = createSlope(10, 40, 20, 10);
        

       

    //    console.log(slope);

        // rise and run not only determine the angle, but the speed.
        //For testing purposes
        //rise over run, or y over x.  This would be 1.5 in decimal
        let rise = slope[0]; //y
        let run = slope[1]; //x

       
        this.position.x += run / deltaTime;
        this.position.y += rise / deltaTime;
    }
}