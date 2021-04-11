class Polygon {
    constructor(x, y, r) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.x=x;
		this.y=y;
        this.r=r
        this.image = loadImage("polygon.png");
        this.body=Bodies.circle(this.x, this.y, this.r/2, options)
        World.add(world, this.body);
      }
      display(){
        var polypos=this.body.position;		
        push()
        translate(polypos.x, polypos.y);
        fill(255, 0, 255)
        imageMode(CENTER)
        ellipseMode(RADIUS);
        image(this.image, 0,0,this.r*2, this.r*2);
        pop()
    }
    
}