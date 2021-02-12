
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer1;
var ground1;
var stone1;
var rubber1;
var sand1,sand2,sand3,sand4,sand5,sand6,sand7,sand8,sand9,sand10;
var iron1;

function setup() {
	createCanvas(900, 600);


	engine = Engine.create();
	world = engine.world;

	hammer1 = new Hammer(450,300);
  ground1 = new Ground(450,590,900,20);
  stone1 = new Stone(550,500);
  rubber1 = new Rubber(700,500);
  sand1 = new Sand(400,570);
  sand2 = new Sand(402,570);
  sand3 = new Sand(404,570);
  sand4 = new Sand(406,570);
  sand5 = new Sand(408,570);
  sand6 = new Sand(410,570);
  sand7 = new Sand(412,570);
  sand8 = new Sand(414,570);
  sand9 = new Sand(416,570);
  sand10 = new Sand(418,570);
  iron1 = new Iron(250,500);

	//Create the Bodies Here.


  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  Engine.update(engine);

  hammer1.display();
  ground1.display();
  stone1.display();
  rubber1.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();
  iron1.display();
  
  drawSprites();
 
}



