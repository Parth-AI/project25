class Dusttbin extends Parent{
     constructor(x, y, width, height) {
         /* var options = {
              'restitution':0.8,
              'friction':100.0,
              //'density':10.0
          }
          this.body = Bodies.rectangle(x, y, width,height,options);
          this.width = width;
          this.height = height;
      
          World.add(world, this.body);*/
          super(x,y,width,height);
          this.image = loadImage("image/dustbingreen.png");
        }
        display(){
         /* var pos =this.body.position;
          push();
          translate(pos.x,pos.y);
          rectMode(CENTER);
          fill(255);
          rect(0,0, this.width, this.height);
          pop();*/
          super.display();
        }
}