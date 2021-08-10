class ComputerArrow{

    constructor(a,b,c,d,archerAngle){
    
    var  options = {
    
    isStatic: true,
    restitution: 0.8,
    friction: 1,
    density: 1
    }
    
    this.x = a;
    this.y = b;
    this.width = c;
    this.height = d;
    
    this.body = Bodies.rectangle(a, b, c, d, options)
    this.image = loadImage("assets/arrow.png")
    World.add(world, this.body)
    }
    
    display(){
    var pos = this.body.position
    push()
    translate(pos.x, pos.y)
    imageMode(CENTER)
    image(this.image, 0, 0, this.width, this.height)
    pop()
    }
    }