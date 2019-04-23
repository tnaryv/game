function predator2() {
    this.height = 180;
    this.width = 150;
    this.x = w + 1000;
    this.y = (Math.random() * h);
    this.leftPull = 0.08; //the force of gravity
    this.velocity = Math.floor(Math.random() * 1); //speed of the gravity
        
    this.show = function() {
      this.x;
      this.y;
      imageMode(CENTER);
        image(predatorPic, this.x, this.y, this.width, this.height);
    }
  
    this.update = function() {
      this.velocity += this.leftPull;
      this.x -= this.velocity;
      if (this.x < (0-this.width)) {
        this.height = 180;
        this.width = 150;
        this.x = w + this.width;
        this.y = (Math.random() * h);
        this.velocity = Math.floor(Math.random() * 1);
        badFish.point += 1;
        document.getElementById("pointCount").innerHTML = badFish.point;
      }
    }
  }