function pipe(x){
    this.x=x;
    this.wide=width/8;
    this.long=random(170,height/2.5);
    this.speed=-3;
    this.show=function(){
        fill(73, 204, 40);                                    
        strokeWeight(5);
        stroke(62, 183, 31);
        rect(this.x,0,this.wide,this.long);                    //Upper
        rect(this.x,height-this.long,this.wide,this.long);     //Lower
        rect(this.x-5,this.long-20,this.wide+10,20);           //Upper Opening
        rect(this.x-5,height-this.long,this.wide+10,20);       //Lower Opening
        
    }
    this.run=function(){
        this.x+=this.speed;
    }
    this.isOut=function(){
        return(this.x+this.wide<0)
    }
    this.isColiding=function(bird){
        if( (bird.x+25>this.x && bird.x-25<this.x+this.wide) && ( (bird.y>0 && bird.y-25<this.long) || 
        (bird.y+25>height-this.long && bird.y<height))){return true}
        else {return false}
        }
    this.stop=function()
    {
        this.speed=0;
    }
}