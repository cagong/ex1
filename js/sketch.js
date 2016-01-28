console.log("reading from js");

var d=20;
var b1dw, b1dh, b1dh2, b2dw, b2dh, b2dh2, b2dh3, b3dw, b3dh, b3dh2, b3dh3, bew, beh, bep, bl, sl, sdw, sdh, sdh2, sdh3, bl1ll, bl1lp, bl1lp2, bl2ll, bl2lp, bl2lp2, bl3ll, bl3lp, bl3lp2, sl1ll, sl1lp, sl1lp2, sl2ll, sl2lp, sl2lp2, sc, r;

function setup() {
	var myCanvas=createCanvas(800,250);
	//link to id mySketch from header tag
	myCanvas.parent('mySketch');
    frameRate(15);
    background(209, 245, 255);
}

function draw(){
    fill(209, 245 ,255, 10);
    noStroke();
    rect(0,0, 800, 250);
    initVariables();
    drawSnowflakes();
    textSize(60);
    textFont("Century Gothic");
    textAlign(CENTER);
    fill(195, 240 ,255);
    noStroke();
    text("Candy Gong", width/2, height/2);
} 

function initVariables() {
    b1dw=int(random(10));
    b1dh=int(random(150));
    b1dh2=int(random(50));
    b2dw=int(random(50));
    b2dh=int(random(200));
    b2dh2=int(random(50));
    b2dh3=int(random(60));
    b3dw=int(random(5, 20));
    b3dh=int(random(230));
    b3dh2=int(random(50));
    b3dh3=int(random(50));
    bew=int(random(100));
    beh=int(random(100));
    bep=int(random(200));
    bl=int(random(150, 230));
    sl=int(random(50, 230));
    sdw=int(random(50));
    sdh=int(random(230));
    sdh2=int(random(40));
    sdh3=int(random(40));
    bl1ll=int(random(100));
    bl1lp=int(random(230));
    bl2ll=int(random(100));
    bl2lp=int(random(230));
    bl3ll=int(random(100));
    bl3lp=int(random(230));
    sl1ll=int(random(100));
    sl1lp=int(random(150));
    sl2ll=int(random(100));
    sl2lp=int(random(150));
    bl1lp2=int(random(-50, 50));
    bl2lp2=int(random(-50, 50));
    bl3lp2=int(random(-50, 50));
    sl1lp2=int(random(-50, 50));
    sl2lp2=int(random(-50, 50));
    sc=random(0.1,0.3);
    r=random(radians(0), radians(360));
}

/* function drawSnowflakes() {
    noFill();
  stroke(255);
  strokeWeight(3);
    for(var i=0; i<360; i+=60) {
  push();
  translate(width/2,height/2);
  rotate(radians(30+i));
  line(0,0,210,0);
  beginShape();
    vertex(0,0);
    vertex(20,-10);
    vertex(60,0);
    vertex(20,10);
    vertex(0,0);
  endShape();
  line(60,0,80,30);
  line(60,0,80,-30);
  line(80,0,120,30);
  line(80,0,120,-30);
  beginShape();
    vertex(80,0);
    vertex(120,-10);
    vertex(140,0);
    vertex(120,10);
    vertex(80,0);
  endShape();
  line(140,0,200,40);
  line(140,0,200,-40);
  ellipse(180,0,40,20);
  beginShape();
    vertex(200,0);
    vertex(210,-5);
    vertex(220,0);
    vertex(210,5);
    vertex(200,0);
  endShape();
  pop();
  }
  
  for(var i=0; i<360; i+=60) {
  push();
  translate(width/2,height/2);
  rotate(radians(0+i));
  line(0,0,110,0);
  line(50,0,70,20);
  line(50,0,70,-20);
  line(80,0,110,20);
  line(80,0,110,-20);
  beginShape();
    vertex(80,0);
    vertex(90,-5);
    vertex(110,0);
    vertex(90,5);
    vertex(80,0);
  endShape();
  pop();
  }
} */

function drawSnowflakes(){
     for (var i=0; i<360; i+=60) {
        noFill();
        strokeWeight(3);
        stroke(255);
        push();
        translate(mouseX, mouseY);
        scale(sc);
        rotate(radians(30+i)+r);
        line(0, 0, bl, 0);
        beginShape();
        vertex(0, 0);
        vertex(b1dh-b1dh2, -b1dw);
        vertex(b1dh, 0);
        vertex(b1dh-b1dh2, b1dw);
        vertex(0, 0);
        endShape();
        line(bl1lp, 0, bl1lp2+bl1lp, bl1ll);
        line(bl1lp, 0, bl1lp2+bl1lp, -bl1ll);
        line(bl2lp, 0, bl2lp2+bl2lp, bl2ll);
        line(bl2lp, 0, bl2lp2+bl2lp, -bl2ll);
        beginShape();
        vertex(b2dh-b2dh3, 0);
        vertex(b2dh-b2dh2, -b2dw);
        vertex(b2dh, 0);
        vertex(b2dh-b2dh2, b2dw);
        vertex(b2dh-b2dh3, 0);
        endShape();
        line(bl3lp, 0, bl3lp2+bl3lp, bl3ll);
        line(bl3lp, 0, bl3lp2+bl3lp, -bl3ll);
        ellipse(bep, 0, bew, beh);
        beginShape();
        vertex(b3dh-b3dh3, 0);
        vertex(b3dh-b3dh2, -b3dw);
        vertex(b3dh, 0);
        vertex(b3dh-b3dh2, b3dw);
        vertex(b3dh-b3dh3, 0);
        endShape();
        pop();
      }

      for (var i=0; i<360; i+=60) {
        noFill();
        stroke(255);
        strokeWeight(3);
        push();
        translate(mouseX, mouseY);
        scale(sc);
        rotate(radians(0+i)+r);
        line(0, 0, sl, 0);
        line(sl1lp, 0, sl1lp2+sl1lp, sl1ll);
        line(sl1lp, 0, sl1lp2+sl1lp, -sl1ll);
        line(sl2lp, 0, sl2lp2+sl2lp, sl2ll);
        line(sl2lp, 0, sl2lp2+sl2lp, -sl2ll);
        beginShape();
        vertex(sdh-sdh3, 0);
        vertex(sdh-sdh2, -sdw);
        vertex(sdh, 0);
        vertex(sdh-sdh2, sdw);
        vertex(sdh-sdh3, 0);
        endShape();
        pop();
      }
}

/* function draw(){
	fill(100,0,0);
	ellipse(mouseX, mouseY, int(random(50)), d);
} */