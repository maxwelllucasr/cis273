/*
*******************************
Food n' Boom'd
Meta Class JS
Version 1
*******************************
*/

//meta game data

export default class Meta {

    constructor(){

        //False by default, true when game is first loaded and finished.
        this.isStarted = false;

        //For things initialized on first run of loop, disabled thereafter
        this.isFirstRound = true; 
        
        //In the game loop, this is the timestamp of the frame before the one currently running.
        //It is used to generate a delta time (time gap between last frame and current one)
        //to calculate consistent game speeds on different devices
        this.lastTime = 0; 

        //self explanatory, used as a baseline for the timestamp from when the game actually starts
        this.firstTimestamp;

        this.firstFrame = null;

        this.isGameOver = false;

        this.isPlacingPhase = true;

        this.currentTower = 0;

        this.score = 0; //currentscore, increment on badguy death

        this.lastBadGuySpawnTimestamp = 0;

        this.currentBadguy = 0;

        this.badguySpawnTime = 1000;

        this.winCondition = false;
    }
}