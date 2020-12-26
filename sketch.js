
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	Engine.run(engine);
	
	log1 = new box(270,620,80,20);
	log2 = new box(640,640,20,250);
	log3 = new box(520,620,80,20);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  log1.display();
  log2.display();
  log3.display();

  drawSprites();
 
}



