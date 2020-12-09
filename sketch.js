var bullet,wall;
var speed , weight;



function setup() {
  createCanvas(1600,400 , 1600 , 400);

  bullet=createSprite(50,250,70,20);
  bullet.velocityX = random(3,36)
  bullet.shapeColor = "white";

  thickness=random(22,83)

  speed = random(223 , 321);
  weight = random(30 , 52)

  wall = createSprite(1200 , 200 , thickness , height/2)
  wall.shapeColor = color(80,80,80);

}
   
  
function draw() {
  background("black");  
if(hasCollided(bullet , wall)){
  bullet.velocityX=0;

 var damage = 0.5 *  weight * speed * speed/ thickness * thickness * thickness;
if(damage>10){
  bullet.shapeColor="green";
}
if(damage<10){
  bullet.shapeColor="red";
}
}
  drawSprites();
}
