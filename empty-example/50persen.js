var angle=0;
var obj;
let stars = [];

function preload() {
  obj = loadModel('rocket.obj');
}

function setup() {
  createCanvas(1000, 600, WEBGL);
  for (var i = 0; i < 800; i++) {
		stars[i] = new Star();		
	}
}

function draw() {
  background(0);
  scale(0.3);
	push();
    translate(width/2,height/2);
	for (var i = 0; i < 800; i++) {	
		stars[i].update();
		stars[i].show();

	}
	pop();
	push();
	translate(mouseX,mouseY);
  rotateX(70);
  rotateZ(10);
  rotateY(angle);
  model(obj);
  angle+=0.01;


}

function Star() 
 {
 	this.x = random(-width,width);
 	this.y = random(-height,height);
 	this.z = random(width);

 	this.update = function (){
 		this.z = this.z-7;
 		if (this.z < 1){
 			this.z = width;
 			this.x = random(-width,width);
		 	this.y = random(-height,height);
 	
 		}
 	}

 	this.show = function(){
 		fill(255);
 		noStroke();
 		this.sx = map(this.x/this.z,0,1,0,width);
 		this.sy = map(this.y/this.z,0,1,0,height)
 		ellipse(this.sx,this.sy,8,8);
 	};
 }
