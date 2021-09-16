class Power{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.spt = createSprite(this.x, this.y, 20, 20);
        this.spt.addAnimation("gold coin", goldCoinAnimation);
        this.spt.scale = 0.08;
    }
}