function bird(x,y){
    this.x=x;
    this.y=y;
    this.acc=1;
    this.lift=-30
    this.vel=0;
    
   
    
    this.render=function(){
        fill(245,240,66);
        stroke(245, 222, 30);
        strokeWeight(3);
        ellipse(this.x,this.y,30,30);  // main
        push();                      //wing
        fill(255, 208, 61);
        translate(this.x-10,this.y+3)
        rotate(-30)
        stroke(255, 208, 61);
        ellipse(0,0,15,10)
        pop();
        push()                          // eye white 
        fill(255,255,255);
        stroke(255)
        ellipse(this.x+7,this.y-7,7,7);
        pop()
        push()                          // eye black
        fill(0);
        stroke(0)
        ellipse(this.x+7,this.y-7,1,1);
        pop()
        push()                         // beak
        angleMode(DEGREES);
        translate(this.x+7,this.y-1)
        stroke(216, 99, 84)
        fill(216, 99, 84);
        rect(0,0,15,5);
        pop()
       }
    this.fall=function(){
        this.vel+=this.acc;
        this.y+=this.vel;
        if(this.y>height-15){
            this.vel=0;
            this.acc=0;}
        if(this.y<15){
            this.lift=0;
            this.vel=0;
        }
    }
    this.flap=function(){
        this.acc=1;
        this.lift=-30;
        this.vel+=this.lift;
        this.vel*=0.9
    }
    this.stop=function()
    {
        this.acc=0;
        this.lift=0;
        this.vel=0;
    }
    
        
}