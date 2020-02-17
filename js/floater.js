import {fraction} from "/cis273/js/frac.js";
// import {HCF} from '/cis273/js/frac.js';

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
        let decimalSlope = fraction(0.5);
        let numAndDem = decimalSlope.split('/');
        


        // console.log(line.numerator + "/" + line.denominator);

        this.position.x += 5 / deltaTime; //bad, fix later
  
    }
}