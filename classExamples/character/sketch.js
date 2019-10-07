var eyeSize = 40;

var mouthX = 125;
var mouthY = 180;


function setup() {
  // put setup code here
  createCanvas(500,500);
  background('cyan');
}

function draw() {
  // put drawing code here

  fill('blue');
  rect(150,220,200,300);//body

  fill('blue');
  ellipse(250,150,310,200);

  strokeWeight(1);
  fill('white');
  ellipse(270,100,eyeSize,eyeSize);//left eye
  ellipse(230,100,eyeSize,eyeSize);//right eye

  fill("black");
  ellipse(270,100,20,20);//left eye black
  ellipse(230,100,20,20);//right eye black




  // width and height
  //console.log("width " + width);
  //console.log("height " + height);

triangle(width/2,height/2,width/2 + 10, height/2 + 10, width/2 - 10, height/2 + 10);

fill('white');
arc(250,200,50,50,0,PI);

strokeWeight(1)
fill('#FF2D00')
arc(250,150,50,50,0,TWO_PI)







}//end of draw
