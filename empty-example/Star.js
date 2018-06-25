var roket;

function setup(){
createCanvas(400,300,WEBGL);
}

function draw(){
model(roket);
}

function preload(){
roket = loadModel('../object/rocket.obj');
}