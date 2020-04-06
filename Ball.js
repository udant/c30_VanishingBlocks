class Ball extends BaseClass{
    constructor(x, y) {
        super(x,y,40,40,PI);
        this.image = loadImage("fireball.jpg");
        
      }
      display(){
        //this.body.position.x = mouseX;
        //this.body.position.y = mouseY;
        super.display();
      }
}