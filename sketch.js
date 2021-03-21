
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ground1

function preload()
{
	
}

function setup() {
	createCanvas(800, 300);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Paper(50,100,12);
	ground1 = new Ground(400,250,800,10);

s1= new Ground(700,235,100,20);
s2= new Ground(650,225,20,50);
s3= new Ground(750,225,20,50);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //ball.display();
  ball.display();
  ground1.display();
  s1.display();
  s2.display();
  s3.display();
  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(ball.body,ball.body.position,{x:10 , y:-10})
	}
}

