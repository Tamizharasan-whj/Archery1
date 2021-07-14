const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player,playerBase;
var computer,computerBase;

function preload(){
  
}


function setup() {
  canvas = createCanvas(900, 600);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;

  player = new Player(700,320,60,140);
  playerBase = new PlayerBase(700,450,140,140);
  
  computerBase = new ComputerBase(200,450,140,140);

  
   //Create Player Base and Computer Base Object


 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
   //Display Player
   player.display();
   //Display Playerbase and computer base 
   playerBase.display();


   //display Player and computerplayer
   computerBase.display();

}
