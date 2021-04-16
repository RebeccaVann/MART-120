class Fish
{
    //constructor
    // x = x-coordinate, y = y-coordinate, w= width, h = height, r = red, g = green, b = blue
    constructor(x,y,w,h,r,g,b,)
    {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.r = r;
        this.g = g;
        this.b = b;
    }

    display()
    {
      noStroke()
      fill(255, 153, 204)
      ellipse(this.x,this.y,80,50)
      triangle(this.x+30,this.y,this.x+80,this.y-30,this.x+80,this.y+30)
      fill(0, 0, 0)
      ellipse(this.x-20,this.y,10,10)
    }
}
