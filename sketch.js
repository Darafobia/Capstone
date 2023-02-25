var player, playerAnimation;
var ground, invisibleGround;


function preload(){
  playerAnimation=loadAnimation("p1.png","p2.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
    player=createSprite(200,200,10,10);
   player.addAnimation("running",playerAnimation);
   ground=createSprite(0,300,10000,100);
}

function draw() {
background("white");



drawSprites();
}

