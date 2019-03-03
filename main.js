var bird;
var pip=[];
var check=0;
var flag=0;
function setup(){
    createCanvas(600,700);
    bird = new bird(200,height/2);
    
    pip.push(new pipe(width)) ;
    
    
}
function draw(){
    background(65,190,235);
    bird.render();
    bird.fall();
    if(frameCount%100==0 && check==0){
        pip.push(new pipe(width));
    }
    for(let i=0;i<pip.length;i++){
        pip[i].show();
        pip[i].run();
        if(pip[i].isColiding(bird) && flag==0)
            { 
              check=1
              pip[i].stop();
              pip[i+1].stop();
              bird.stop();
              push()
              fill(0)
              stroke(0)
              textSize(50)
              text("GAME OVER",(width/2)-150,height/2)
              pop()
              push()
              fill(0)
              stroke(0)
              strokeWeight(1)
              textSize(25)
              text("refresh to restart",(width/2)-150+62,(height/2)+25)
              pop()
              flag==1
            }
        
        }
    for(let t=0;t<pip.length;t++){
            if(pip[t].isOut()){
                pip.splice(t,1);
            }
            
        }
}
function keyPressed(){
    if(key == ' '){
        bird.flap();
    }
    if(key == 'r'){
        restart();
    }
}