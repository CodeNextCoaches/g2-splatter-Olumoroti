// declare and initialize global variables

var canvas;

var canvasWidth = 500;

var canvasHeight = 400;

var clearButton;

var slider;

var spread;


function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  background(0);
  canvas.parent("canvas-area");
  canvas.mousePressed(drawSplatter);
  button = select("#clear-button");
  button.mousePressed(setup);
  slider = select("#slider");
  slider.input(updateSpread);
  
  updateSpread();
}


function draw(){
 
}
 




 
  function drawSplatter(){


  var circles = random(10,15);
  fill(random(0,255), random(0,255), random(0,255))
  noStroke();
  for(i=0; i < circles; i++){
  var radius = random(5, 15)
  ellipse(random(mouseX-spread, mouseX+spread), random(mouseY-spread, mouseY+spread), radius, radius);
    }


  }
 
 function updateSpread(){

  spread = slider.value();


 }


  /*Creates ellipses on the canvas around where the mouse is clicked.
  * Details:
  * -The function creates between 10 and 14 ellipses (random).
  * -Each ellipse will be a random color and have no outline.
  * -Each ellipse will have a random radius (5 to 14 pixels).
  * -Each ellipse's x and y values are calculated like this:
  *  x = random value between mouseX - spread and mouseX + spread
  *  y = random value between mouseY - spread and mouseY + spread
  */
