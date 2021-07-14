class Player{
    constructor(x,y,width,height,playerImage){
        var options = {
            isStatic:true,
            label:'Player'
        }
        playerImage = loadImage("./assets/player.png");
        this.image = playerImage;
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