function preload() {
  circleAB = loadImage("circle.png")
  FlowerAB = loadImage("flowerbody.jpeg")
  circleBC = loadImage("circle1.png");
  circleCD = loadImage("circle2.png");
  circleDE = loadImage("circle3.png");
  circleEF = loadImage("circle4.png");
  circleFG = loadImage("circle5.png");
  brushAB = loadImage("brush1.png");
}


function setup() {
  createCanvas(800,400);
  red = createSprite(50,50);
  red.addImage(circleBC);
  red.scale = 0.6;

  blue = createSprite(50,110);
  blue.addImage(circleCD);
  blue.scale = 0.6;

  green = createSprite(50,170);
  green.addImage(circleDE);
  green.scale = 0.6;

  purple = createSprite(50,230);
  purple.addImage(circleEF);
  purple.scale = 0.6;

  orange = createSprite(50,290);
  orange.addImage(circleFG);
  orange.scale = 0.6;

  brush = createSprite(50,240,50,50);
  brush.addImage(brushAB);
  brush.scale = 0.2;



  flower = new Picture()

}

function draw() {
  background("white");  
  brush.x = mouseX;
  brush.y = mouseY;
  drawSprites();
}