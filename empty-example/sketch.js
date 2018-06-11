let angle = 0;
let cam;
/*
let camX= 0.0;
let camY= 0.0;
*/
function setup() {	
	createCanvas(640,480,WEBGL);
	/*
	cam = createCapture(VIDEO);
	cam.size(320,240);
	cam.hide();
	*/
}	
/*
function keyPressed() {
  switch (keyCode) {
   case UP_ARROW : 
   camY = 200;
   break; 
   case DOWN_ARROW : 
   camY = -200;
   break;
   case LEFT_ARROW : 
   camX = -200;
   break;
   case RIGHT_ARROW : 
   camX = 200;
   break;
	}
  }
*/
function draw() {
   background(0);
   
   let camX = map(mouseX,0,width, -200,200);
   let camY = map(mouseY,0,height, -200,200);
   camera(camX,camY,(height/2)/tan(PI/6),
   		  0,0,0,
   		  0,1,0);
   rectMode(CENTER);
   noStroke();

   push();
  
   normalMaterial();
   //fill(0,1,100);
   //texture(cam);
//   rotateY(angle);	
   box(100);
   pop();

   translate(0,100);
   rotateX(HALF_PI);
   ambientMaterial(255);
   plane(320,240);

   angle += 0.07
}