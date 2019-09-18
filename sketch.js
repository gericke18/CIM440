var eyeSize = 40;
var faceColor = "blue";

var faceButton;

function setup() {
  // put setup code here
  createCanvas(500,500);
  pointX = width/2;
  pointY = height/2;

  faceButton = createButton("Click to turn orange");
  faceButton.position(20,20);
  faceButton.mousePressed(function(){
    //your action goes in here
    //The button mousepressed function is tied to the general mousepressed function
    faceColor = "orange";

  });
}

function draw() {
  // put drawing code here


  if(mouseX < width/2){
    console.log("left hand side");
      background(255);
  }

  if(mouseX > width/2){
    console.log("right hand side");
    background("red");
  }

  if(mouseX == width/2){
    console.log("center");
    background("yellow");
  }

  pointX = mouseX;
  pointY = mouseY;


  fill(faceColor);
  rect(150,220,200,300);

  fill(faceColor);
  ellipse(250,150,310,200);

  strokeWeight(1);
  fill('white');
  ellipse(270,100,eyeSize,eyeSize);//left eye
  ellipse(230,100,eyeSize,eyeSize);//right eye

  fill("black");
  ellipse(270,100,20,20);//left eye black
  ellipse(230,100,20,20);//right eye black

  strokeWeight(1)
  fill('pink')
  arc(250,150,50,50,0,TWO_PI)

  fill('white');
  arc(250,200,50,50,0,PI);


}// end of draw


function keyPressed(){

  console.log("key " + key);
  console.log("keyCode " + keyCode);

  // if statement is true, then execute code inside {}
  // == if oneside equals the other
  // if you press b, then key becomes "b" == "b" which is true
  // key returns a character
  if(key == "b"){
      faceColor = "blue";
  }

// if you press r, then keyCode becomes 82, 82 == 82 which is true
//keycode returns a number
  if(keyCode == 82){
    faceColor = "red";
  }

}
