/*
*******************************
Food n' Boom'd
Static class JS
Version 1
*******************************
*/

export default class Static{


    constructor(type){
        this.position = {
            x : 5000,
            y : 5000
        }
        this.height = 50;
        this.width  = 50;
        this.type = type;
        this.activeProjectile = false;
        this.towerTime = 0;
        this.lastShotTime = 2000;
    }

    draw(ctx){
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

}