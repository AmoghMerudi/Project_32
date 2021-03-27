class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            isStatic: false
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.visibility = 255;
      }
      display(){
        if(this.body.speed<5){
        rectMode(CENTER);
        fill("blue");
        rect( this.body.position.x, this.body.position.y, this.width, this.height);
        }
        else{
          World.remove(world, this.body);
          push();
          this.visibility = this.visibility-5;
          tint(255,this.visibility);
          pop();
        }
      }

       score(){
         var score = 0;
         text("Score: " + score,750,40);
         if(this.visibility<0 && this.visibility>-105){
           score++;
         }
      }
}