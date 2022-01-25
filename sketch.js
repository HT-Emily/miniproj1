function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  x = 0;
  y = windowHeight/2 - 100;
  background(300);
  strokeWeight(2);
  stroke('#fae');
  while(x < windowWidth) {
    line(x, 0, x, windowWidth);
    x = x + 4;
  }
  line(0, 0, windowWidth, windowHeight);
  fill(300);
  strokeWeight(4);
  circle(windowWidth/2, windowHeight/2, 200);
  strokeWeight(2);
  while(y <= windowHeight/2 + 100) {
    line(windowWidth/2 - 100, y, windowWidth/2 + 100, y);
    y = y + 4;
  }
}