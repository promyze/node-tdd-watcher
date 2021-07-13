export default class Game {

    private score: Number;
    
    constructor() {
        this.score = 0;
    }

    start(): void {
        this.score = 0;
    }

    currentScore(): Number {
        return this.score;
    }

}