var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  
  bullet=createSprite(50, 200, 25, 25);

  speed=Math.round(random(223,321));
  weight=Math.round(random(30,52));
  thickness=Math.round(random(22,83));

  wall=createSprite(1500,200,thickness,height/2);
  
}

function draw() {
  background(0);

  bullet.velocityX=speed;
  if(bullet.x-wall.x>bullet.width/2+bullet.width/2){
    bullet.velocityX=0;
    var deformation=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(deformation<10){
      wall.shapeColor="green";
    }
    if(deformation>10){
      wall.shapeColor="red";  
    }
  }

  drawSprites();
}