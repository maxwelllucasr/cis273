/*
*******************************
Food n' Boom'd
Floater Class JS
Version 1
*******************************
*/

// import {HCF} from '/cis273/js/frac.js';
import {createSlope} from './functions.js';

export default class Floater{

    constructor(gameWidth, gameHeight, type, projectileSlope){
        //default height/width for new block
        
        this.type = type;
            if (type == "projectile") {
                this.slope = projectileSlope; //If a projectile, set slope once and dont update
                this.width = 20;
                this.height = 20;
                this.speed = 5; 
            }
        else{
            this.width = 100;
            this.height = 100;
            this.slope = null;
            this.speed = 2; 
            this.hitbox = 50;
            this.hp = 20;
            this.currentlyHit = false;
        }
        this.currentHeading = 1;  //points to xy coordinates in pathPoint
        this.towerDaddy = null; //Tower # of origin for projectiles
        this.direction = null; //only used for projectiles, badguys are hardcoded for now
        this.updateSlope = true;
        this.isDead = false;
    
        

        //default position for new class
        this.position = {
            x : 10,
            y : 10

        }
    }

    //Method takes context object as input and uses object x, y, width and height variables to redraw rectangle
    draw(ctx){
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    fnbDrawImage(ctx,imageObject){
        ctx.drawImage(imageObject,this.position.x,this.position.y);
    }




    updatePosition(deltaTime, pathPoint){

        if (!deltaTime) return;
  
        let xHeading = pathPoint[this.currentHeading].position.x;
        let yHeading = pathPoint[this.currentHeading].position.y;

        let xHeadingStart = pathPoint[this.currentHeading-1].position.x;
        let yHeadingStart = pathPoint[this.currentHeading-1].position.y;

        //This should go somewhere else where it only runs when it needs to
        if (this.type != "projectile") this.slope = createSlope(xHeadingStart, xHeading, yHeadingStart, yHeading);

        var rise, run, upflag = false, downflag = false;


        // rise and run not only determine the angle, but the speed.
        //For testing purposes
        //rise over run, or y over x.  This would be 1.5 in decimal


        //for when denominator is 0
        if(this.slope == "+"){
            upflag = true;
        }
        else if (this.slope == "-"){
            downflag = true;
        }
        else{
            rise = this.slope[0]; //y
            run = this.slope[1]; //x
        }       

        let newXpos = run / deltaTime;
        let newYpos = rise / deltaTime;

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

        //sign correctors
        if(this.type == "badguy"){
        //Remember that negative y is up and negative x is left
            if(pathPoint[this.currentHeading].position.x < pathPoint[this.currentHeading-1].position.x) newXpos = -Math.abs(newXpos)
            if((pathPoint[this.currentHeading].position.y > pathPoint[this.currentHeading-1].position.y)&&(pathPoint[this.currentHeading].position.x < pathPoint[this.currentHeading-1].position.x)) newYpos = Math.abs(newYpos)
            if((pathPoint[this.currentHeading].position.y < pathPoint[this.currentHeading-1].position.y)&&(pathPoint[this.currentHeading].position.x < pathPoint[this.currentHeading-1].position.x)) {newYpos = -Math.abs(newYpos);}
        }

        //sign correctors... cleaner and for projectiles
        else if(this.type == "projectile"){
            if (this.direction == "topleft"){
                newXpos = -Math.abs(newXpos);
                newYpos = -Math.abs(newYpos);
            }
            else if (this.direction == "topright"){
                newXpos = Math.abs(newXpos);
                newYpos = -Math.abs(newYpos);
            }
            else if (this.direction == "bottomleft"){
                newXpos = -Math.abs(newXpos);
                newYpos = Math.abs(newYpos);
            }
            else if (this.direction == "bottomright"){
                newXpos = Math.abs(newXpos);
                newYpos = Math.abs(newYpos);
            }

        }

        this.position.x += newXpos;
        this.position.y += newYpos;
    }






    death(){  
        // console.log("in death")
        this.isDead = true;


        
    }
}

    