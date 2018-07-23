var obj;
let stars = [];
var speed;
let cam;
let arah=0;
let camX= 0.00;
let camY= 0.00;
var button;
 
function preload() {   
  obj = loadModel('rocket.obj');
 
}
 
function setup() {
  createCanvas(800, 600, WEBGL);
 colorMode(HSB);

  for (var i = 0; i < 50; i++) {
        stars[i] = new Star();     
    }  
}

function rotasi(callback){
	callback();
}
 
function draw() {
    
  background(0);
  scale(0.3);
  ambientMaterial(250);
  push();
 
     camera(camX,camY,(height/2)/tan(PI/6), 0, 0, 0, 0, 1, 0);
 
push();
 
 
    translate(width/2,height/2);
    for (var i = 0; i < 50; i++) {
        stars[i].update();
        stars[i].show();
 
    }
pop();
push();
normalMaterial();
  translate(mouseX,mouseY);
  rotateX(70);
  rotateZ(10);
  rotasi(keyPressed);
  model(obj);

   
   
 
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
        this.r = map(this.z,0,width,20,0);
        ellipse(this.sx,this.sy,this.r,this.r);
        
        /*this.px = map(this.x/this.pz,0,0.01,0,width);
        this.py = map(this.y/this.pz,0,0.01,0,height);
       
        line(this.px,this.py,this.sx,this.sy);
        */
    }
 }
function keyPressed() {
  switch (keyCode) {
   case LEFT_ARROW :
   rotateY(arah);
   arah+=0.03;
   break;
   case RIGHT_ARROW :
   rotateY(-arah);
   arah+=0.03;
   break;
    }
  }

function keyTyped() {
  if (key === 'w') {
   camY+=50;
   
  } else if (key === 's') {
    camY+=-50;
  }
   else if (key === 'a') {
    camX+=-50;
  }
   else if (key === 'd') {
    camX+=50;
  }
  // uncomment to prevent any default behavior
  // return false;
}  