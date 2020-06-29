const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5;
var world;
var roof,rope1;


function setup() {
	createCanvas(800, 800);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	bob1=new Bob(400,350);
	bob2= new Bob(370,350);
	bob3= new Bob(340,350);
	bob4= new Bob(310,350);
	bob5= new Bob(280,350);
	roof = new Roof();
	rope1 = new Rope(bob1.body,roof.body,-bob1Diameter*2,0);
	
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background("white");
 
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
 rope1.display();
  

  
  
 
  
  
 
}





