var bullet, wall, thickness;
var speed, weight;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);
  thickness = random(22,83);

  bullet = createSprite(50,200,50,10);
  bullet.velocityX = speed;
  bullet.shapeColor = 'white';

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = 'gray';
}

function draw() {
  background('lightblue');  

  hasCollided();

  drawSprites();
}

function hasCollided(bullet,wall){
  var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
  
  if(damage > 10){
    bullet.velocityX = 0;
    wall.shapeColor = 'red';
  }

  if(damage < 10){
    bullet.velocityX = 0;
    wall.shapeColor = 'green';
 }
}