const Engine = Matter.Engine;
const World= Matter.world;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var back_ground_img,player_1_img;
var player_1;
var snow;

function preload(){
  back_ground_img = loadImage("snow2.jpg");
  player_1_img = loadImage("player.png");
}

function setup() {
  createCanvas(800,400);
  player_1 = createSprite(100, 290, 50, 50);
  player_1.addImage(player_1_img);
  player_1.scale = 0.5;
  player_1.velocityX = 1;
 snow = new Snow (400,200);
  

}

function draw() {
  background(back_ground_img);  
  snow.display();
  drawSprites();
}