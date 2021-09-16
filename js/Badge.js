class Badge{
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.spt = createSprite(this.x, this.y, this.width, this.height);
        this.spt.addAnimation("badge", badgeAnimation);
        this.spt.scale = 0.2;
    }
}