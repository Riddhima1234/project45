class Picture{
    constructor(){
        this.flowerbody = createSprite(250,200);
        this.flowerbody.addImage(FlowerAB);
        this.flowerbody.scale = 1;

        this.circle = createSprite(240.1,199);
        this.circle.addImage(circleAB);
        this.circle.scale = 0.52;
    }
}