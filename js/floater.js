// import {HCF} from '/cis273/js/frac.js';
import {createSlope} from './functions.js';

export default class Floater{

    constructor(gameWidth, gameHeight, type, projectileSlope){
        //default height/width for new block
        
        this.type = type;
            if (type == "projectile") {
                this.slope = projectileSlope;
                this.width = 20;
                this.height = 20;
            }
        else{
            this.width = 100;
            this.height = 100;
            this.slope = null;

        }
        this.currentHeading = 1;  //points to xy coordinates in pathPoint
        this.speed = 1; 
        this.towerDaddy = null;
        

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




    updatePosition(deltaTime, pathPoint){

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
  
        let xHeading = pathPoint[this.currentHeading].position.x;
        let yHeading = pathPoint[this.currentHeading].position.y;

        let xHeadingStart = pathPoint[this.currentHeading-1].position.x;
        let yHeadingStart = pathPoint[this.currentHeading-1].position.y;

        //This should go somewhere else where it only runs when it needs to
        if (this.type != "projectile") this.slope = createSlope(xHeadingStart, xHeading, yHeadingStart, yHeading);
            // console.log(xHeadingStart, xHeading, yHeadingStart, yHeading)

        var rise, run, upflag = false, downflag = false;

    //    console.log(this.slope);

        // rise and run not only determine the angle, but the speed.
        //For testing purposes
        //rise over run, or y over x.  This would be 1.5 in decimal


        //for when denominator is 0
        if(this.slope == "+"){
            upflag = true;
            console.log("up")
        }
        else if (this.slope == "-"){
            downflag = true;
        }
        else{
            rise = this.slope[0]; //y
            run = this.slope[1]; //x
        }

        // console.log(rise, run)
       

        let newXpos = run / deltaTime;
        let newYpos = rise / deltaTime;

        // console.log(newXpos, newYpos);



        //this governs the speed by adding total movement between x and y
        //and dividing by this.speed.
        //Then, taking that quotient and dividing both new x and new y by it.
        //The results are newX and newY that have a sum of this.speed.

        let totalSpeed = newXpos + newYpos;
         totalSpeed = totalSpeed / this.speed;

         newXpos = newXpos / totalSpeed;
         newYpos = newYpos / totalSpeed;

        if (upflag){
            newXpos = 0;
            //negative is technically up
            newYpos = -Math.abs(this.speed);
        }
        else if(downflag){
            newXpos = 0;
            newYpos = Math.abs(this.speed);
        }
        // newXpos = -1;

        // if (this.type == "projectile") console.log(newXpos + ' space ' + newYpos);



        if(pathPoint[this.currentHeading].position.x < pathPoint[this.currentHeading-1].position.x) newXpos = -Math.abs(newXpos)
        if((pathPoint[this.currentHeading].position.y > pathPoint[this.currentHeading-1].position.y)&&(pathPoint[this.currentHeading].position.x < pathPoint[this.currentHeading-1].position.x)) newYpos = -Math.abs(newYpos)


        if (this.type == "badguy") console.log(newXpos + ' space ' + newYpos);

        this.position.x += newXpos;
        this.position.y += newYpos;
    }
}