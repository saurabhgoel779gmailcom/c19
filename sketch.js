var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(300, 300, 100, 200);
  fixedRect.shapeColor="green";
  movingRect= createSprite(300, 300, 200, 100);
  movingRect.shapeColor="red";
}

function draw() {
  background(255,255,255);  
  console.log(movingRect.x-fixedRect.x);
if(movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2 
  && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2
  && movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 
  && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2)
  {
    movingRect.shapeColor="blue";
  }
else
  {
    movingRect.shapeColor="red";
  }

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  drawSprites();
}