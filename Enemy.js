class Enemy extends BaseClass{
    constructor(x, y) {
        super(x,y,50,50);
        this.image = loadImage("enemy.jpg");
        this.Visibility = 255;

       // World.add(world, this.body);    
      }
      display(){
        if(this.body.speed < 6){
          super.display();
        }
        else{
          //do nothing
         // console.log("Inside body    " + this.body.speed);
          World.remove(world,this.body);
          push();
         // console.log("visibility1  " + this.Visibility);
          
          this.Visibility = this.Visibility - 15;
          tint(255, this.Visibility);
         // console.log("visibility2  " + this.Visibility);
          image(this.image,this.body.position.x,this.body.position.y,50,50);
          pop();
        }
        //super.display();
       // score();
      
      }
      
}

/*constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visibility = 255;
  }
  display(){
    console.log(this.body.speed);
    if(this.body.speed<7){
      super.display();
    }
    else{
      //do nothing
      World.remove(world,this.body);
      push();
      this.Visibility = this.Visibility -5;
      tint(255, this.Visibility);
      image(this.image,this.body.position.x,this.body.position.y,50,50);
      pop();
    }


    
  }*/