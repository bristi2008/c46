class Ball {
    constructor(x, y,r) {

        var options ={
            restitution:0.8
        }
        this.r=r;
      
        this.body = Bodies.circle(x, y, this.r,options);       
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
    }

    isClicked(){
        var d = dist(this.body.position.x,this.body.position.y,mouseX,mouseY)
        
        if(d<=this.r){
            score = score+5
            World.remove(world,this.body);
        }
    }

};
