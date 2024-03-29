const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //nivel uno
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //nivel dos
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //nivel tres
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  block16 = new Block(390,155,30,40);
  //parte superior
 
  block17 = new Block(725,175,30,40);
  block18 = new Block(735,175,30,40);
  block19 = new Block(745,175,30,40);
  block20 = new Block(715,175,30,40);
  block21 = new Block(700,175,30,40);

  block22 = new Block(725,185,30,40);
  block23 = new Block(735,185,30,40);
  block24 = new Block(715,185,30,40);

  block25 = new Block(725,100,30,40);

 ball=Bodies.circle(50,200,20);
  World.add(world,ball);
  slingShot = new Slingshot(this.ball,{x:100,y:200})

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  text("Arrastra la pelota para tumbar los bloques",200,400);

  ground.display();
  stand1.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();

  fill("skyblue");
  


  
  block19.display();
 
  block21.display();
  block22.display();
  block24.display();
  
  block23.display();
  fill("pink");
   block20.display();
   block18.display();
   block17.display();
  
  fill("turquoise");

imageMode(CENTER);
image(polygon_img,ball.position.x,ball.position.y,40,40);
slingShot.display();
  fill("grey");
  block25.display();
 fill("red")
stand2.display();

}


function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}