var engine ,world;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	BobObject1 = new Bob(270,450,25);
	BobObject2 = new Bob(320,450,25);
	BobObject3 = new Bob(370,450,25);
    BobObject4 = new Bob(420,450,25);
	BobObject5 = new Bob(470,450,25);
	
	roofObject = new Roof(370,100,300,25);

	rope1 = new Rope(BobObject1.body, roofObject.body, -100, 0);
	rope2 = new Rope(BobObject2.body, roofObject.body, -50, 0);
	rope3 = new Rope(BobObject3.body, roofObject.body, 0, 0);
	rope4 = new Rope(BobObject4.body, roofObject.body, 50, 0);
	rope5 = new Rope(BobObject5.body, roofObject.body, 100, 0);

}


function draw() {
  rectMode(CENTER);
  background(235);
  
  drawSprites();
 
 BobObject1.display();
 BobObject2.display();
 BobObject3.display();
 BobObject4.display();
 BobObject5.display();

 roofObject.display();

 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
 

}

function keyPressed(){
    if(keyCode === UP_ARROW ){
	  	
      Matter.Body.applyForce(BobObject1.body,BobObject1.body.position,{x:-60,y:60});
    }
}