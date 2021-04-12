var canvas, backgroundImage;

var Steve
var Craftingtable
var Pickaxe
var Sword
var Shovel
var Axe
var Stone
var Diamond
var obsidian
var netherportal
var netherfort
var blaze
var blazerod
var blazepowder
var enderman
var enderpearl
var endereye
var endportalframe
var endportal
var endstone
var enderdragon

var form, player, game;

function preload(){
bg=loadImage("images/Minecraft.png");
SteveImage=loadImage("images/Steve.png");
CraftingtableImage=loadImage("images/Crafting_Table.png")
}
function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
Steve=createSprite(200,200)
Steve.addImage(SteveImage);
Steve.scale=0.4;

Craftingtable=createSprite(500,500)
Craftingtable.addImage(CraftingtableImage);
Craftingtable.scale=0.2;
}
function draw(){
  background(bg);
  if(keyDown("w")){
  Steve.y=Steve.y-3
  }
  if(keyDown("s")){
  Steve.y=Steve.y+3
  }
  if(keyDown("D")){
    Steve.x=Steve.x+3
    }
    if(keyDown("a")){
      Steve.x=Steve.x-3
      }
  drawSprites()
}
