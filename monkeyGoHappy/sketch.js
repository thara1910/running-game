
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup,obst;
var survivalTime,ground,wall;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(600,400); 
  
  //create ground
  ground = createSprite(300,300,600,10);
  ground.velocityX = -4;
  
  
  // create monkey 
  monkey = createSprite(50,270,10,10);
  monkey.addAnimation("tae_tae",monkey_running);
  monkey.scale = 0.1;
  
  //create wall
  wall = createSprite(80,100,100,10);
  wall.visible = false;
  
  
  

}


function draw() {
  background(220);
  //console.log(ground.x)

  if(monkey.x<300){
    jump();
    
    if(monkey.isTouching(wall)){
        monkey.velocityY =  monkey.velocityY+0.5;
    }
  }
  if(ground.x>0){
    ground.x=ground.width/2
  }
  
  if(frameCount%80 ==0){
    banana = createSprite(500,150,10,10,);
    banana.addImage("taehyungie",bananaImage);
    banana.scale=0.1;
    banana.velocityX = -2
    banana.y = Math.round(random(100,200));
    banana.lifeTime = -1;
  }
  
  if(frameCount%300 == 0){
    obst = createSprite(300,270,10,10);
    obst.addImage("v",obstacleImage);
    obst.scale = 0.1;
    obst.x = 550;
    obst.velocityX = -3;
    obst.lifeTime =  -1;
  }
   var survivaltime = 0
   stroke("white");
  textSize(20);
  fill("white");
  text("survivaltime:",400,50)
  
  stroke("black")
  textSize(20);
  fill("black");
  survivaltime = Math.ceil(frameCount/frameRate());
  text(survivaltime,515,50);
  
  
    monkey.collide(ground);
drawSprites();
  
}
function jump(){
if(keyDown("space")){
  monkey.velocityY = -4;


}

}


