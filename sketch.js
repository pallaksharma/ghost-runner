var tower,towerImage;
var door,doorImage,doorGroup;
var ghost,ghostImage;
var invisibleBlock,invisibleBlockgroup;
var gameState = "play";
var spookySound;

function preload(){
  towerImage = loadImage("tower.png");
  doorImage = loadImage("door.png");
  ghostImage = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
  
}



function setup(){
  createCanvas(600,600);
  
  tower = createSprite(300,300);
  tower.velocityY=1;
  tower.addImage(towerImage);
  
  doorGroup = new Group();
  invisibleBlockgroup = new Group();
  ghost = createSprite(200,200,50,50);
  ghost.addImage(ghostImage);
  ghost.scale=0.3;
  
  spookySound.loop();
  
  
  
  
  
}

function draw(){
  background(0);
  if(gameState==="play"){
    
  
  
  if(tower.y > 600){
    tower.y = 300;
  }
    
  spawnDoors();
  
 if (keyDown("space")){
   ghost.velocityY=-5;
 }
  if (keyDown("right")){
    ghost.x=ghost.x+3;
    
  }
  if (keyDown("left")){
    ghost.x=ghost.x-3;
  }
  ghost.velocityY=ghost.velocityY+0.8;
  
  if (invisibleBlockgroup.isTouching(ghost)||ghost.y>600){
    ghost.destroy();
    gameState = "end";
    
  }
  
  
  
  
  
  drawSprites();
  } 
  if (gameState==="end"){
    stroke("yellow");
    fill("yellow");
    textSize(40);
    text("game Over", 230,250);
    
  }
  
}

function spawnDoors(){
  if(frameCount%200===0){
    door = createSprite(200,-50);
    invisibleBlock = createSprite(200,15);
    door.velocityY=1;
    invisibleBlock.velocityY=1;
    invisibleBlock.width = door.width;
    invisibleBlock.height=2;
    door.addImage(doorImage);
    door.x = Math.round(random(120,400));
    invisibleBlock.x=door.x;
    invisibleBlock.debug = true;
    door.lifetime=700;
    invisibleBlock.lifetime=700;
    doorGroup.add(door);
    ghost.depth=door.depth;
    ghost.depth=ghost.depth+1;
    invisibleBlockgroup.add(invisibleBlock);
    
    
    
}
}
