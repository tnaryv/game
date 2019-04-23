function badFish() {
    this.height = 70;
    this.width = 70;
    this.x = w + 300;
    this.y = (Math.random() * h);
    this.leftPull = 0.3; //the force of gravity
    this.velocity = Math.floor(Math.random() * 0.1); //speed of the gravity
    this.point = 0;
        
    this.show = function() {
        this.x;
        this.y;
        imageMode(CENTER);
        image(badFishie, this.x, this.y, this.width, this.height);
    }
  
    this.update = function() {
      this.velocity += this.leftPull;
      this.x -= this.velocity;
      if (this.x < (0-this.width)) {
        this.height = 70;
        this.width = 70;
        this.x = w + this.width;
        this.y = (Math.random() * h);
        this.velocity = Math.floor(Math.random() * 0.1);
        this.point += 1;
        document.getElementById("pointCount").innerHTML = this.point;

        if (this.point == 15) {
          this.leftPull += 0.1;
          badFish2.leftPull += 0.1;
          badFish3.leftPull += 0.1;
          predator.leftPull += 0.1;
          predator2.leftPull += 0.1;
        }
        if (this.point == 25) {
          this.leftPull += 0.1;
          badFish2.leftPull += 0.1;
          badFish3.leftPull += 0.1;
          predator.leftPull += 0.1;
          predator2.leftPull += 0.1;
        }
        
      }
    }
  }