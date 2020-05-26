class Paper extends Parent{
     constructor(x, y, width, height) {
      /* var options = {
           'restitution':0.8,
           'friction':200.0,
           'density':1.0,
          isStatic : false
       }
       this.body = Bodies.circle(200, 200, 25,options);
       this.width = 50;
       this.height = 50;
   
       World.add(world, this.body);*/
       super(x,y,width,height);
       this.image = loadImage("image/paper.png");
     }
     /*display(){
      /* var pos =this.body.position;
       push();
       translate(pos.x,pos.y);
       rectMode(CENTER);
       fill(255);
       circle(0,0, this.width, this.height);
       pop();*/
     //}
   }
   