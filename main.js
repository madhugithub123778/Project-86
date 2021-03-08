var canvas= new fabric.Canvas('myCanvas');

block_height=40;
block_width= 40;

player_x= 10;
player_y= 10;

player_object="";
block_image="";

function player_update(){
fabric.Image.fromURL("player.png", function (Img){
var player_object= Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(150);
player_object.set({
top: player_y,
left: player_x
});
canvas.add(player_object);
});
}


function new_image(get_image){
fabric.Image.fromURL(get_image, function (Img)   
{
var block_image=Img;
block_image.scaleToWidth(block_width);
block_image.scaleToHeight(block_height);
block_image.set({
top: player_y,
left: player_x
});
canvas.add(block_image);});}