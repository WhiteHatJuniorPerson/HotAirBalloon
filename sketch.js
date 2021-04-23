var balloon,balloonImage1,balloonImage2,balloonImg;
// create database and position variable here

function preload(){
   bg =loadImage("cityImage.png");
   balloonImg = loadImage("hotairballoon1.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1500,700);
    balloon = createSprite(250,250,10,10);
    balloon.shapeColor = "red";
    database=firebase.database();
    var readPos = database.ref("position");
    readPos.on("value",read,notResponding);
}
  

 


// function to display UI
function draw() {
  background(bg);
  balloon.addImage(balloonImg);
if(keyDown(LEFT_ARROW)){
    writeValues(+5,0);
    
}
else if(keyDown(RIGHT_ARROW)){
    writeValues(-5,0);
}
else if(keyDown(UP_ARROW)){
    writeValues(0,-5);     
}
else if(keyDown(DOWN_ARROW)){
    writeValues(0,+5); 
}


  drawSprites();

}
function read(data){
  position = data.val();
  console.log(position.x);
  balloon.x = position.x;
  balloon.y = position.y;
}
function notResponding(){
  console.log("error");
}
function writeValues(a,b){
  database.ref("position").update({
      x:balloon.x-a,
      y:balloon.y+b
  })
}