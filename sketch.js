var humanCharacter
var monsterCharacter
var groundImg
var backImg
var humanImg
var monsterImg
var gameOverImg
var gameStartImg
var backImage
var groundImage

var PLAY = 1;
var END = 0;
var gameState = PLAY;
var gameOver,gameStart

function preload(){
gameStartImg = loadImage("gameStart.png")
gameOverImg =loadImage("gameOver.jpg")
humanImg = loadImage("humanCharacter.jpg")
groundImg = loadImage("groundImg.jpg")
monsterImg = loadImage("monsterCharacter.jpg")
}

function setup(){
createCanvas(600,600);
ground=createSprite(300,300,600,50);
humanCharacter=createSprite(200,200,100,25);
humanCharacter.addImage("humanCharacter",humanImg)
monsterCharacter=createSprite(150,170,50,25);
monsterCharacter.addImage("monsterCharacter",monsterImg)
gameStart =createSprite(200,200,50,50);
gameStart.addImage("gameStart",gameStartImg)
gameOver =createSprite(300,300,50,50);
gameOver.addImage("gameOver",gameOverImg)
groundImage =createSprite(300,300,600,50);
groundImage.addImage("groundImage",groundImg)
groundImage.scale=2

}

function draw(){

  drawSprites()
}