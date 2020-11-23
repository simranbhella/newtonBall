class Rope {
    constructor(bodyA, bodyB) {
        var options ={
            bodyA : bob.body,
            bodyB : roof.body,
            length : 10,
            stiffness : 0.4
        }
    
        this.chain = Constraint.create(options);
        World.add(world, this.chain)
     
    }
    display(){
      var pointA =this.chain.bodyA.position;
      var pointB =this.chain.bodyB.position;
      strokeWeight(5);
      line(pointA.x, pointA.y, pointB.x, pointB.y)
    }
  };