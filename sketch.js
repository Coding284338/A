const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var computer;
var player;
var playerBase;
var computerBase;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
computer = new Computer(200,350,150,300);
player = new Player(750,350,150,300);
computerBase = new ComputerBase(200,550,300,250);
playerBase = new PlayerBase(750,550,300,300);
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 


   //display Player and computerplayer

computer.display();
  player.display();
computerBase.display();
playerBase.display();
}
