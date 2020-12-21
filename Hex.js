class Hex {
    constructor(x, y) {
      var options = {
        'density':1.5,
        'friction': 1.0,
        'restitution':0.5
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      World.add(world, this.body);
      this.Visibility= 255;
    };
    display(){
      var pos = this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('blue')
      fill('red')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);

      if(this.body.speed>3){
     
       console.log(this.body.speed);
        World.remove(world,this.body);
        this.Visibility=this.Visibility-5;
  
        tint(255,this.Visibility);
        image(this.image,this.body.position.x,this.body.position.y,50,50);
        
  
      }else{    
    
          display();
  
      }



      pop();


    };
  };