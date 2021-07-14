class ComputerBase{
    constructor(x,y,width,height,computerBaseImg){
       
        var options = {
            isStatic :true
        }
        computerBaseImg = loadImage("./assets/base2.png");
        this.image = computerBaseImg;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
         imageMode(CENTER);

    }

    display(){
       var pos = this.body.position;
        image(this.image,pos.x,pos.y,this.width,this.height);

    }






}