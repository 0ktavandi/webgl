var angle=0;
var obj;
let stars = [];
var speed;
let cam;
let camX= 800;
let camY= 800;


function preload() {	
  obj = loadModel('rocket.obj');
  
}

function setup() {
  createCanvas(800, 600, WEBGL);
 colorMode(HSB);
 	 

  for (var i = 0; i < 500; i++) {
		stars[i] = new Star();		
	}	
}

function draw() {
  background(0);
  scale(0.3);
  ambientMaterial(250);
  push();

     camera(camX,camY,(height/2)/tan(PI/6), 1, 0, 1, 0, 1, 1);

push();

  
    translate(width/2,height/2);
	for (var i = 0; i < 500; i++) {	
		stars[i].update();
		stars[i].show();

	}
pop();
push();
normalMaterial();
  translate(mouseX,mouseY);
  rotateX(70);
  rotateZ(10);
  rotateY(angle);
  model(obj);
  angle+=0.03;
   
	

}

function Star() 
 {
 	this.x = random(-width,width);
 	this.y = random(-height,height);
 	this.z = random(width);
 	this.hu = random(255);

 	this.pz = this.z;

 	this.update = function (){
 		this.z = this.z-7;
 		if (this.z < 1){
 			this.z = width;
 			this.x = random(-width,width);
		 	this.y = random(-height,height);
 	
 		}
 	}

 	this.show = function(){
	    strokeWeight(2);
	    stroke(this.hu,255,255,255);
 		this.sx = map(this.x/this.z,0,1,0,width);
 		this.sy = map(this.y/this.z,0,1,0,height)
 		this.r = map(this.z,0,width,16,0);
 		ellipse(this.sx,this.sy,this.r,this.r);
 		/*
 		this.px = map(this.x/this.pz,0,1,0,width);
 		this.py = map(this.y/this.pz,0,1,0,height);
 		
 		line(this.px,this.py,this.sx,this.sy);
		*/
 	}
 }
function keyPressed() {
  switch (keyCode) {
   case UP_ARROW : 
   camY = 500;
   break; 
   case DOWN_ARROW : 
   camY = -500;
   break;
   case LEFT_ARROW : 
   camX = -500;
   break;
   case RIGHT_ARROW : 
   camX = 500;
   break;
	}
  }