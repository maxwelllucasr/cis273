
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
        // while (true){
        if (!deltaTime) return;
        this.position.x += 5 / deltaTime; //bad, fix later
        // this.position.y = newYpos;
        // }
    }
}