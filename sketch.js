const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ball,connon;
var pause;
var count;
var rand;
var score = 0;
var platform,ground;
var base1,base2,base3;
var enemy1,enemy2,enemy3,enemy4,enemy5,enemy6,
enemy7,enemy8,enemy9,enemy10,enemy11,enemy12;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
function setup(){
    count=500;
    canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    connon = new Cannon(200,210,90,50)
    base1 = new Ground(600,220,100,20);
    base2 = new Ground(800,140,100,20);
    base3 = new Ground(1100,220,100,20);
    enemy1 = new Enemy(570,120); 
    enemy2 = new Enemy(620,120);
    enemy3 = new Enemy(770,110);
    enemy4 = new Enemy(820,110); 
    enemy5 = new Enemy(1070,120);
    enemy6 = new Enemy(1120,120);
    enemy7 = new Enemy(570,110); 
    enemy8 = new Enemy(620,110);
    enemy9 = new Enemy(770,200);
    enemy10 = new Enemy(820,100); 
    enemy11 = new Enemy(1070,100);
    enemy12 = new Enemy(1120,100);
    ground = new Ground(600,380,1200,20);
    platform = new Ground(150, 305, 300, 170);
    ball = new Ball(200,200);
    slingshot = new SlingShot(ball.body,{x:200,y:210});
    pause = new Ground(2000,380,500,50);
    //log6 = new Log (230,180,80,PI/2);
   // chain = new Chain(bird.body,log6.body);

    
}




function draw(){

    background(204,211,221);
    
    Engine.update(engine);
   // ball.x = mouseX;
    
   // ball.y = mouseY;
    //log6.display();
    //chain.display();
    frameRate(555);
    slingshot.display();
    platform.display();
    //ground.display();
    enemy1.display();
    enemy2.display();
    enemy3.display();
    enemy4.display();
    connon.display();
    enemy5.display();
    enemy6.display();
    enemy7.display();
    enemy8.display();
    enemy9.display();
    enemy10.display();
    enemy11.display();
    enemy12.display();
    base1.display();
    base2.display();
    base3.display();
    ball.display();
    pause.display();
    ground.display();
    count--;
  
   // console.log("visibility2  " + enemy1.Visibility);
    if(enemy1.Visibility< 0 && enemy1.Visibility > -16) {
     score++;
    }
    if(enemy2.Visibility< 0 && enemy2.Visibility > -16) {
        score++;
       }
    if(enemy3.Visibility< 0 && enemy3.Visibility > -16) {
    score++;
    }
    if(enemy4.Visibility< 0 && enemy4.Visibility > -16) {
        score++;
       }
    if(enemy5.Visibility< 0 && enemy5.Visibility > -16) {
      score++;
    }   
    if(enemy6.Visibility< 0 && enemy6.Visibility > -16) {
        score++;
       }
    if(enemy7.Visibility< 0 && enemy7.Visibility > -16) {
    score++;
    } 
    if(enemy8.Visibility< 0 && enemy8.Visibility > -16) {
        score++;
       } 
    if(enemy9.Visibility< 0 && enemy9.Visibility > -16) {
    score++;
    } 
    if(enemy10.Visibility< 0 && enemy10.Visibility > -16) {
        score++;
       }
    if(enemy11.Visibility< 0 && enemy11.Visibility > -16) {
    score++;
    } 
    if(enemy12.Visibility< 0 && enemy12.Visibility > -16) {
        score++;
       }     
    text("Game Time: "+ count , 900,50);
    text("Score: " + score,300,50);
    var highest = count;
    if (count<0 || score === 12) {
        //strokeWeight(7);
        gameState = END;
        stroke("red");
        fill("red");
        textSize(30);
        text("Game Over:", 600,200);
    }
    
   // console.log("Ballobject code - "+ball);

}
/*function mouseDragged(){
    Matter.body.setPosition(ball.body,{x:mouseX,y:mouseY});
    }

function mouseReleased(){
    SlingShot.fly();
}*/
function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}


function keyPressed() {
    if (keyCode === 32) {
        slingshot.attach(ball.body);
    }
  }  
