function setup() {
  createCanvas(1400, 800);
  colorMode(HSB, 100);
  //frameRate(2); //how many times it draws per second
  background(220);
}

function draw() {
  background("#46b4e3");
  strokeWeight(0)

  fill("#4e7282")
  triangle(0, 800, 1400, 800, 700, 100);
fill("#8bb6c9")
  triangle(100, 800, 1400, 800, 850, 200);

fill("white")

  ellipse(50,50,60,50);
  ellipse(80,40,60,50);
  ellipse(130,50,60,50);
  ellipse(70,70,60,50);
  ellipse(110,65,60,50);

  ellipse(250,150,60,50);
  ellipse(280,140,60,50);
  ellipse(330,150,60,50);
  ellipse(270,170,60,50);
  ellipse(310,165,60,50);

  ellipse(450,50,60,50);
  ellipse(480,40,60,50);
  ellipse(530,50,60,50);
  ellipse(470,70,60,50);
  ellipse(510,65,60,50);

  ellipse(650,150,60,50);
  ellipse(680,140,60,50);
  ellipse(730,150,60,50);
  ellipse(670,170,60,50);
  ellipse(710,165,60,50);

  ellipse(850,50,60,50);
  ellipse(880,40,60,50);
  ellipse(930,50,60,50);
  ellipse(870,70,60,50);
  ellipse(910,65,60,50);

  ellipse(1050,150,60,50);
  ellipse(1080,140,60,50);
  ellipse(1130,150,60,50);
  ellipse(1070,170,60,50);
  ellipse(1110,165,60,50);

  ellipse(1250,50,60,50);
  ellipse(1280,40,60,50);
  ellipse(1330,50,60,50);
  ellipse(1270,70,60,50);
  ellipse(1310,65,60,50);


  stroke(0);
  fill(0);
  fill("#24852d")
  ellipse(700, 800, 1550, 590);
  stroke(0);


  // call createBorders function
  fill(0, 255, 255);
  stroke(0)
  createBorders(10);





}



function mousePressed(){
  flower(mouseX,mouseY, random(60,100) );
}

function flower(x, y, hue){

  var size = 20;
  var stemHeight = 100;

  //draw the stem
  stroke(45,90,90);
  fill(45,90,90);
  strokeWeight(3);
  line(x,y, x, y+stemHeight);

  var leafSize = 30;
  var leafWidth = leafSize/2
  //draw leaves
  noStroke();
  ellipse(x+leafWidth,y+stemHeight/2, leafSize, leafWidth);
  ellipse(x-leafWidth,y+stemHeight/2, leafSize, leafWidth);

  //draw the petals
  fill(hue,100,100);
  var petalSize = 25;
  for (var theta=0; theta<TWO_PI; theta+=PI/3){
    var petalx = size*cos(theta) + x;
    var petaly = size*sin(theta) + y;
    ellipse(petalx, petaly, petalSize, petalSize);
  }
  //draw the flower center
  fill(17,100,100);
  ellipse(x, y, petalSize, petalSize);


}
