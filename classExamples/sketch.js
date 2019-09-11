function setup() {
  // put setup code here

  createCanvas(300,300);
  background(0,255,0);
}

function draw() {
  //put drawing code here

  //left eye
  ellipse(100,100,20,20);

  //right eye
  ellipse(140,100,20,20);

  //mouth
  rect(50,100,100,50);

  //mole
  strokeWeight(5);
  point(30,27);

  //width/2

  console.log("width " + width);
  console.log("height " + height);

}
