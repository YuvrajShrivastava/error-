class Paper{
    constructor(x, y, radius) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(x,y,radius);
        //this.width = width;
        this.radius = radius;
        World.add(world, this.body);
        
      }
      display(){
        var pos =this.body.position;
        //rectMode(CENTER);
        fill("brown");
        ellipse(pos.x, pos.y, pos.radius);
      }

}