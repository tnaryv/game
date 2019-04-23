function oceanFloor() {
  this.height = 50;
  this.width = w;
  
  this.show = function() {
   
    rect(0, (h-50), this.width, this.height);
    image(sandFloor, 0,0);

  }
}