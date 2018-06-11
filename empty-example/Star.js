let stars = [];

function setup() {	
	createCanvas(800,800,WEBGL);
	for (var i = 0; i < 800; i++) {
		stars[i] = new Star();		
	}
}	

function draw() {
   background(0);
   
   Roket();

   translate(width/2,height/2);
for (var i = 0; i < 800; i++) {
		
		stars[i].update();
		stars[i].show();

	}
	push();
	pop();

}

function Roket(){
	push();

	rotateX(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  cylinder(20, 50);
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