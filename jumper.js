function jumper() {
  this.x = 50;
  this.y = 0;
  this.gravity = 0.5; //the force of gravity
  this.lift = -10; //opposing force
  this.velocity = 0; //speed of the gravity
  this.width = 150;
  this.height = 120; 

  this.show = function() {
    if (sharkFace == "right"){ //right
      //imageMode(CENTER);
      image(shark, this.x, this.y, this.width, this.height);
    }
    else if (sharkFace == "left"){ //left
      //imageMode(CENTER);
      image(shark2, this.x, this.y, this.width, this.height);
    }
  }

  this.move = function() { //left
    if ((keyIsDown(37)) && (this.x > 80)) {
      this.x -= 10;
      sharkFace = "left";
      }
    if ((keyIsDown(39)) && (this.x < (w-80))) {
      this.x += 10;
      sharkFace = "right"
    }     
  }
      
  this.up = function() {
    this.velocity += this.lift; //when i go up, i am going to oppose the gravity by -10
  }
      
  this.update = function() {
    this.velocity += this.gravity; //gravity affects velocity, velocity is speed ()
    this.y += this.velocity;
    this.velocity *= 0.95; //air resistance
    if (this.y > (h-135)) { //stop on floor
      this.y = (h-135);
      this.velocity = 0;
    }
    if (this.y < 0) { //stop on ceiling
      this.y = 0;
      this.velocity = 0;
    }
  }
}
    
