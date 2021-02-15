const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;




var balls = [];
var score = 0;

function preload(){
   starImg = loadImage("star1.png");
   groundIMG = loadImage("ground.jpg");
}

function setup(){
   engine = Engine.create();
   world = engine.world;

   createCanvas(1500,800);

   back_ground = createSprite(750,420,1500,800);
   back_ground.addImage("background",groundIMG);
   back_ground.scale = 5


   
   ground = new Ground(750,700,1500,20);
   ground1 = new Ground(0,700,20,1500);
   ground2 = new Ground(1500,700,20,1500);
   ground3 = new Ground(750,0,1500,20);
   ball = new Ball(400, 400, 15);
   ball2 = new Ball(500, 250, 19);
   ball3 = new Ball(600, 100, 20);
   ball4 = new Ball(700, 150, 17);
   ball5 = new Ball(100, 300, 12);
   ball6 = new Ball(200, 350, 17);
   ball7 = new Ball(300, 450, 15);
   ball8 = new Ball(400, 400, 15);
   ball9 = new Ball(500, 250, 19);
   ball10 = new Ball(350, 100, 16);
   ball11 = new Ball(250, 150, 17);
   ball12 = new Ball(450, 300, 12);
   ball13 = new Ball(250, 350, 17);
   ball14 = new Ball(150, 450, 13);
   ball15 = new Ball(600, 400, 15);
   ball16 = new Ball(500, 250, 19);
   ball17 = new Ball(800, 100, 20);
   ball18 = new Ball(900, 150, 17);
   ball19 = new Ball(1000, 300, 12);
   ball20 = new Ball(920, 350, 17);
   ball21 = new Ball(750, 450, 15);
   ball22 = new Ball(1400, 400, 15);
   ball23 = new Ball(1500, 250, 19);
   ball24 = new Ball(1350, 100, 16);
   ball25 = new Ball(1150, 150, 17);
   ball26 = new Ball(1450, 300, 12);
   ball27 = new Ball(1250, 350, 17);
   ball28 = new Ball(1050, 450, 13);
   ball29 = new Ball(850, 450, 13);
   ball30 = new Ball(550, 450, 13);
   ball31 = new Ball(400, 400, 15);
   ball32 = new Ball(500, 250, 19);
   ball33 = new Ball(1360, 150, 20);
   ball34 = new Ball(1670, 150, 17);
   ball35 = new Ball(1000, 300, 12);
   ball36 = new Ball(1200, 350, 17);
   ball37 = new Ball(1300, 450, 15);
   ball38 = new Ball(1400, 20, 15);
   ball39 = new Ball(1500, 50, 19);
   ball40 = new Ball(350, 0, 16);
 balls = [ball, ball2,ball3,ball4,ball5,ball6,ball7,ball8,ball9,ball10,ball11,ball12,ball13,ball14,ball15,
          ball16,ball17,ball18,ball19,ball20,ball21,ball22,ball23,ball24,ball25,ball26,ball27,ball28,ball29,ball30,
          ball31,ball32,ball34,ball35,ball36,ball37,ball38,ball39,ball40]   
   star1 = new Star(200,300,20);
   star2 = new Star(100,700,20);
   star3 = new Star(500,600,20);
   star4 = new Star(700,700,20);

   
}

function draw(){
   background("black")
   Engine.update(engine);

   drawSprites();

   fill("white")
   textSize(30)
   text("Score"+score,width-200,100)

   ground.display();
   ground1.display();
   ground2.display();
   ground3.display();

   
   star1.display();
   star2.display();
   star3.display();
   star4.display();

  

   for(var i = 0; i < balls.length; i++){
      balls[i].display();
    }

}

function mouseClicked(){
   star1.isClicked();
   star2.isClicked();
   star3.isClicked();
   star4.isClicked();
   for(var i = 0; i < balls.length; i++){
      balls[i].isClicked();
   }
}