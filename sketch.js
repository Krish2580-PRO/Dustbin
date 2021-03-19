
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,side1,side2,side3
var paperBody
function preload()
{
	
}

function setup() {
	createCanvas(1000,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1= new Ground(500,500,1000,10)

	dustbin = new Dustbin(800,400,150,200)

	paper = new Paper(150,400)
	Engine.run(engine);
  
	
}

function draw() {
  rectMode(CENTER);
  background(255,255,255);
  
  drawSprites();
 ground1.display()

dustbin.display()

paper.display()

paper.x= paperBody.position.x 
paper.y= paperBody.position.y 
keyPressed()
}

function keyPessed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperBody.body,paperBody.body.position,{x:85,y:-85})	
	  }
}

