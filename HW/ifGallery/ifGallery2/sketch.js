var imgArray = [];
var currentImage = 0;

function preload(){
  imageArray[0] = loadImage("images/sloth.jpg");
  imageArray[1] = loadImage("images/puppy.jpg");
  imageArray[2] = loadImage("images/dinosaur.jpg");
  imageArray[3] = loadImage("images/shark.jpg");
  imageArray[4] = loadImage("images/seahorse.jpg");
}

function setup() {
  // put setup code here
  createCanvas(400,400);

  sButton = createButton("Sloth");
  sButton.mousePressed(function(){

      currentImage = 0;

  });

  pButton = createButton("Puppy");
  pButton.mousePressed(function(){

      currentImage = 1;

  });

  dButton = createButton("Dinosaur");
  dButton.mousePressed(function(){

      currentImage = 2;

  });

  shButton = createButton("Seahorse");
  shButton.mousePressed(function(){

      currentImage = 3;

  });

  wButton = createButton("Shark");
  wButton.mousePressed(function(){

      currentImage = 4;

  });

}

function draw() {

  background(255);

  console.log("currentImage " + currentImage);

    image(imageArray[currentImage],0,0,imageArray[currentImage].width/4,imageArray[currentImage].height/4);





}
