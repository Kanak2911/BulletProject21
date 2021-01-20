var bullet, wall, thickness;
var speed, weight;

function setup() {
  createCanvas(1000,400);

  speed = random(55,90);
  weight = random(400,1500);
  thickness = random(22,83);

  bullet = createSprite(50,200,50,10);
  bullet.velocityX = speed;
  bullet.shapeColor = 'white';

  wall = createSprite(900,200,thickness,height/2);
  wall.shapeColor = 'gray';
}

function draw() {
  background(0);  
  if(hasCollided(bullet, wall)){
  	 bullet.velocityX=0;
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

  drawSprites();
}

function hasCollided(lbullet, lwall){
	bulletRightEdge=lbullet.x +lbullet.width;
	wallLeftEdge=lwall.x;
	if(bulletRightEdge>=wallLeftEdge){
		return true
	}
	return false;
}