class Block{
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.spt = createSprite(this.x, this.y, this.width, this.height);
        this.spt.shapeColor = rgb(100, 82, 168);
    }
} //36, 31, 56