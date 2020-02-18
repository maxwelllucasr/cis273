export default class Static{


    constructor(){
        this.position = {
            x : 500,
            y : 500
        }
        this.height = 50;
        this.width  = 50;



    }

    draw(ctx){
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

}