
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function setup() {
	createCanvas(1500,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	groundObject = new Ground(width/2,670,width,20);
	dustbinObject = new Dustbin(1200,350);
	paperObject = new Paper(200,450,40);
	var render = Render.create({
		element:document.body,
		engine:engine,
		options:{
			width:1200,
			height:700,
			wireframes:false
		}
	}) 
 Engine.run(engine); 
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  drawSprites();
  groundObject.display();
  dustbinObject.display();
  paperObject.display();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}

}


