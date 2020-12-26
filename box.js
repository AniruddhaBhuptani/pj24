class Log {
    constructor(x,y,height,weight){
      super(x,y,20,height,weight);
      this.image = loadImage("sprites/wood2.png");
      Matter.Body.setWeight(this.body, weight);
    }
  }