// variable
var player, badge;
var power1, power2, power3, power4, power5;
var block1, block2, block3, block4, block5;
var playerAnimation, badgeAnimation, goldCoinAnimation;
var backgroundImg, congoImg ;
var score = 0;
var life = 5;
var coinSound, lostSound, winSound;
// var gameState = PLAY;
// var gameState = END;

function preload(){
  playerAnimation = loadAnimation("images/Boy1.png", "images/Boy2.png", "images/Boy3.png", "images/Boy4.png", "images/Boy5.png", "images/Boy6.png", "images/Boy7.png", "images/Boy8.png", "images/Boy9.png");

 badgeAnimation = loadAnimation("images/Badge.png");

 goldCoinAnimation = loadAnimation("images/Goldcoin.png"); 

 backgroundImg = loadImage("images/Bg1.jpg");
 
 congoImg = loadImage("images/Bg2.jpg");

coinSound = loadSound("sounds/Coin.wav");

lostSound = loadSound("sounds/Lose.wav");

winSound = loadSound("sounds/Win.wav");

}

function setup(){

  // canvas
  createCanvas(800,800);

  // player red 
  player = new Player(30, 70, 30, 30);
  
  // badge blue
  badge = new Badge(700, 730, 20, 20);

  // power upszz black
  power1 = new Power(200, 200);
  power2 = new Power(470, 630);
  power3 = new Power(600, 100); 
  power4 = new Power(700, 360);
  power5 = new Power(200, 500);

  // blocks yellow
  block1 = new Block(120, 40, 100, 20);
  block2 = new Block(50, 150, 100, 20);
  block3 = new Block(120, 240, 100, 20);
  block4 = new Block(50, 340, 100, 20);
  block5 = new Block(150, 440, 100, 20);
  block6 = new Block(200, 10, 20, 200);
  block7 = new Block(200, 300, 20, 100);
  block8 = new Block(220, 140, 100, 20);
  block8 = new Block(50, 500, 20, 200);
  block9 = new Block(150, 680, 20, 200);
  block10 = new Block(50, 700, 100, 20);
  block11 = new Block(390, 50, 200, 20);
  block12 = new Block(350, 440, 100, 20);
  block13 = new Block(300, 740, 200, 20);
  block14 = new Block(320, 550, 200, 20);
  block15 = new Block(325, 645, 20, 100);
  block16 = new Block(550, 720, 100, 20);
  block17 = new Block(560, 150, 200, 20);
  block18 = new Block(360, 260, 20, 200);
  block19 = new Block(530, 600, 20, 100);
  block20 = new Block(690, 530, 100, 20);
  block21 = new Block(600, 430, 20, 100);
  block22 = new Block(500, 370, 100, 20);
  block23 = new Block(500, 270, 20, 100);
  block24 = new Block(640, 230, 100, 20);
  block25 = new Block(740, 440, 100, 20);
  block26 = new Block(10, 0, 10000, 1);
  block27 = new Block(10, 799, 10000, 1);
  block28 = new Block(1, 0, 1, 10000);
  block29 = new Block(799, 0, 1, 10000);
  block30 = new Block(780, 200, 20, 100);

}

function draw(){

  // background
  background(backgroundImg);

  // mouse coordinates
  fill("black");
  text("x : "+mouseX + ", y : " + mouseY, 10,10 );

  // Points
  textSize(20);
  fill("red");
  text("Collected Coins: " + score, 620, 50);

  // lifes
  textSize(20);
  fill("white");
  text("LIFES: " + life, 380, 20);

  // Player Movemnent 
  if (keyDown("left")){
    player.spt.x =player.spt.x -5;
  }

  if (keyDown("right")){
    player.spt.x =player.spt.x + 5;
  }

  if (keyDown("up")){
    player.spt.y =player.spt.y -5;
  }

  if (keyDown("down")){
    player.spt.y = player.spt.y + 5;
  }

  // Increasing the score
  if (power1.spt.isTouching(player.spt)){
    power1.spt.destroy();
    score = score+1;
    coinSound.play();
  }

  if (power2.spt.isTouching(player.spt)){
    power2.spt.destroy();
    score = score+3;
    coinSound.play();
  }

  if (power3.spt.isTouching(player.spt)){
    power3.spt.destroy();
    score = score+5;
    coinSound.play();
  }

  if (power4.spt.isTouching(player.spt)){
    power4.spt.destroy();
    score = score+2;
    coinSound.play();
  }

  if (power5.spt.isTouching(player.spt)){
    power5.spt.destroy();
    score = score+5;
    coinSound.play();
  }

  // losing game
  if(life === 0){
    
    textSize(90);
    fill("black");
    text("LOST IT !!!", 200, 380);
    for (var i = 1; i <= 13; i++){
      block_i.spt.destroy();
      
    }
  }
  
  // Winning the game 
  if (badge.spt.isTouching(player.spt)){
    winSound.play();
    background(congoImg);
    textSize(40);
    fill("teal");
    text("Congo!! You Completed the Maze!", 100, 370);
    badge.spt.destroy();
    for (var i = 1; i <= 13; i++){
      block_i.spt.destroy();
    }
  }

  // defining touching function 
Touching(block1);
Touching(block2);
Touching(block3);
Touching(block4);
Touching(block5);
Touching(block6);
Touching(block7);
Touching(block8);
Touching(block9);
Touching(block10);
Touching(block11);
Touching(block12);
Touching(block13);
Touching(block14);
Touching(block15);
Touching(block16);
Touching(block17);
Touching(block18);
Touching(block19);
Touching(block20);
Touching(block21);
Touching(block22);
Touching(block23);
Touching(block24);
Touching(block25);
Touching(block26);
Touching(block27);
Touching(block28);
Touching(block29);

// displaying sprites
drawSprites();

} 

// Touching
function Touching(block1){
if(player.spt.isTouching(block1.spt)){
  lostSound.play();
  player.spt.x = 30;
  player.spt.y = 70;
  life = life -1;
}
}