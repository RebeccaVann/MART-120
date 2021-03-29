
var characterX = 100;
var characterY = 100;
// key codes
var w = 87;
var s = 83;
var a = 65;
var d = 68;

// x and y for a shape
var shapeX = 40;
var shapeY = 260;
var speed = 3
var z = 1

let x = 320;
let y = 180;
let xspeed = 5;
let yspeed = 2;
let r = 25;

// click shape
var mouseShapeX;
var mouseShapeY;
function setup()
{
  createCanvas(500, 600);

}

function draw()
{
    background(50, 164, 168);
    stroke(0);
    strokeWeight(0);
    fill(0);

    rect(0,0,width,10);

    rect(0,0,10,height);

    rect(0, height-10,width, 10);

    rect(width-10,0,10,height-50);

    // message
    textSize(20);
    text("ESCAPE HERE!", width-160,height-50)

    //character
    fill(231, 252, 38);
    square(characterX,characterY,25);

    // directions
    if(keyIsDown(w))
    {
        characterY -= 10;
    }
    if(keyIsDown(s))
    {
        characterY += 10;
    }
    if(keyIsDown(a))
    {
        characterX -= 10;
    }
    if(keyIsDown(d))
    {
        characterX += 10;
    }

    //  enemies
         stroke(255, 20, 83)
         strokeWeight(15)
         fill(220, 20, 0, 2);
         triangle(shapeX, 100, shapeX, 50, shapeY, 80)
        shapeX = shapeX + speed
        shapeY = shapeY + speed
        if(shapeX > width)
        {
            speed = -speed;
        }
        if(shapeX < 0)
        {
            speed = -speed;
        }

             stroke(255, 20, 83)
             strokeWeight(15)
             fill(220, 20, 0, 2);
             triangle(shapeX, 300, shapeX, 250, shapeY, 280)
            shapeX = shapeX + speed
            shapeY = shapeY + speed
            if(shapeX > width)
            {
                speed = -speed;
            }
            if(shapeX < 0)
            {
                speed = -speed;
            }

                         stroke(255, 20, 83)
                         strokeWeight(15)
                         fill(220, 20, 0, 2);
                         triangle(shapeX, 500, shapeX, 450, shapeY, 480)
                        shapeX = shapeX + speed
                        shapeY = shapeY + speed
                        if(shapeX > width)
                        {
                            speed = -speed;
                        }
                        if(shapeX < 0)
                        {
                            speed = -speed;
                        }


            stroke(72, 250, 27);
            ellipse(x, y, r*2, r*2);

              x += xspeed;
              y += yspeed;
              if (x > width - r || x < r) {
                xspeed = -xspeed;
              }
              if (y > height - r || y < r) {
                yspeed = -yspeed;
              }




      if(characterX > width && characterY > width-50)
      {
          strokeWeight(0);
          fill(0);
          stroke(5);
          textSize(26);
          text("You Win!", width/2-50, height/2-50);
      }

    fill(120,130,140);
    circle(mouseShapeX, mouseShapeY, 25);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
