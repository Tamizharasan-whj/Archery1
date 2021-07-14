class PlayerBase{
    constructor(x,y,width,height,playerBaseImg){
       
        
        var options = {
            isStatic :true,
            label:'Base'
        }
        playerBaseImg = loadImage("./assets/base1.png");
        this.image = playerBaseImg;
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