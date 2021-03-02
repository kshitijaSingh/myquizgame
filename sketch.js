var canvas;
var gameState=0;
var DataBase,Quiz,question;
var Player,playerCount;

function setup(){
  canvas = createCanvas(850,400);
}


function draw(){
  background("blue");
  if(playerCount === 4){
    gameState.update(1);
  }
  if(gameState === 1){
    clear();
    gameState.play();
  }

  
}
