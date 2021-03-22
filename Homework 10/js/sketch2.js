var blush1X = 250;
var blush1Y = 210;
var blush1Direction = 1;

var blush2X = 155;
var blush2Y = 210;
var blush2Direction = 1;

var browX = 200;
var browY = 100;
var browDirection = 1.5;

let mouthx = 320;
let mouthy = 180;
let mouthxspeed = 5;
let mouthyspeed = 2;

let r = 25;

var size = 22;
var count = 0;
var sizeDirection = 2;


function setup()
{
    createCanvas(400, 400);
}

function draw()
{
  background('#ffe066');


		//hair
		fill('#301607')
		ellipse(200, 200, 250, 290);
		fill('#301607')
		rect(75, 190, 250, 280);

		//skin
		fill('#ECD4A3')
		ellipse(200, 205, 200, 250);
	  ellipse(150, 455, 200, 150);
	  ellipse(250, 455, 200, 150);
		noStroke();
		fill('#ECD4A3')
		rect(160, 210, 80, 200);

    // blush
    fill('#F8AE9E');
    circle(blush1X,blush1Y,50);
    blush1X+=blush1Direction;
    if(blush1X >= 400 || blush1X <= 249)
    {
        blush1Direction *= -1;
    }


		// blush
		fill('#F8AE9E');
		circle(blush2X,blush2Y,50);
		blush2X+=blush2Direction;
		if(blush2X >= 156 || blush2X <= 1)
		{
				blush2Direction *= -1;
		}


		//lashes
		stroke(50);
		fill('#2F251C');
		line(255,185,272,173);
		line(255,180,268,170);
		line(255,175,265,168);

		stroke(50);
		fill('#2F251C');
		line(150,185,132,173);
		line(150,180,138,170);
		line(150,175,145,168);


		//eye
		fill('#2F251C');
		ellipse(250, 180, 20, 20);
		ellipse(155, 180, 20, 20);

		//nose
		noStroke();
		fill('#EA8D79');
		triangle(200, 220, 230, 210, 200, 200);
		noStroke();

		//mouth
		fill('#EF896E');
		ellipse(mouthx, mouthy, r*2., r*2);
		noStroke();
  mouthx += mouthxspeed;
  mouthy += mouthyspeed;
  if (mouthx > width - r || mouthx < r) {
    mouthxspeed = -mouthxspeed;
  }
  if (mouthy > height - r || mouthy < r) {
    mouthyspeed = -mouthyspeed;
  }


		//eyebrows
		fill('#2F251C');
		ellipse(150, browY, 50, 8);
		browY += browDirection;
		if(browY <= 0 || browY >= 200 )
		{
				browDirection *= -1;
		}

		ellipse(250, browY, 50, 8);
		browY += browDirection;
		if(browY <= 0 || browY >= 150 )
		{
				browDirection *= -1;
		}




    fill(120);
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text("Michael Cassens",270,500 );


}d
