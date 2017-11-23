//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//04_Exercise01 - Loops and Random Color

function setup() {
  createCanvas(1000, 600);
  //noLoop()
}

function draw() {
  background(0);
    for (let i=0; i<1000; i++){
      fill(random(255), random(255), random(255));
      push();
        rotate(random(TWO_PI));
        scale(random(0.5, 2));
        rect(random(width), random(height), 40,40);
      pop();
    }
}
