class Roof{
    constructor(){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(290,150,300,20)
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        fill("grey")
        rect(335,195,200,20);
    }
}