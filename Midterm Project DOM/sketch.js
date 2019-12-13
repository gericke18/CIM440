let bg;
let y = 0;
let img;
let value = 255;
let hawksbill;
let lionfish;

var scubaImage, manatee;

let font,
  fontsize = 40;

function preload() {
  font = loadFont('assets/SourceSansPro-Semibold.otf');
  img = loadImage('assets/florida.png');
  scubaImage = loadImage('assets/scuba.jpg');
  manatee = loadImage('assets/manatee.png');

}

function setup() {
  //background image
  bg = loadImage('assets/jellyfish.jpg');
  hawksbill = loadImage('assets/hawksbill.png');
  lionfish = loadImage('assets/lionfish.png');
  createCanvas(1000, 563);

  //text
  textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);

  button = createButton('More on Hawksbill Sea Turtles');
  button.position(150, 240);
  button.mousePressed(wikipedia);

  button2 = createButton('More on Invasive Lionfish');
  button2.position(150, 340);
  button2.mousePressed(invasive);
}

function draw() {
  var myDiv1 = createDiv('The sea, once it casts its spell, holds one in its net of wonder forever.');

  // Set the position of div element
  myDiv1.position(170, 450);

  // Set the div size
  myDiv1.size(200, 100);

  // Set the font-size of text
  myDiv1.style('color', 'white');

  // Use createDiv() function to
  // create a div element
  var myDiv = createDiv('Marine Science');

  // Set the position of div element
  myDiv.position(180, 80);

  // Set the div size
  myDiv.size(200, 100);

  // Set the font-size of text
  myDiv.style('font-size', '15px');

  // Set the font-size of text
  myDiv.style('border', '1px solid white');

  // Set the font-size of text
  myDiv.style('text-align', 'center');

  // Set the font color
  myDiv.style('color', 'white');

  // Hide the div element
  myDiv.hide();


  background(bg);

  //text

  textAlign(CENTER);
  drawWords(width * 0.5);

  image(img, 670, 250);



  image(scubaImage, 900, 480);
  image(scubaImage, 915, 460);
  image(scubaImage, 920, 420);

  image(manatee, 820, 320);

  image(manatee, 770, 270);



fill(value);
  rect(40, 200, 500, 70);
  rect(40, 300, 500, 70);

image(hawksbill, 0, 160);
image(lionfish, 0, 270);

textSize(15);
fill(0);
text('Lionfish are invasive and pose a threat to the Ecosystem.', 335, 320);

textSize(15);
fill(0);
text('Hawksbill sea turtles are a fascinating reef species.', 315, 220);

}

function wikipedia() {
  window.open("https://simple.wikipedia.org/wiki/Hawksbill_turtle");
}

function invasive() {
  window.open("https://www.fisheries.noaa.gov/feature-story/impacts-invasive-lionfish");
}

function mousePressed() {
  if (value === 255) {
    value = color(255,105,180);
  } else {
    value = 255;
  }
}

function drawWords(x) {

  textSize(40);
  fill(290);
  text('ENDLESS OCEAN', x, 80);

  textSize(25);
  fill(290);
  text('Diving the Florida Keys', x, 115);

  textSize(12);
  fill(290);
  text('Click around this interactive infographic to learn more about diving in Florida', x, 145);

  textSize(25);
  fill(290);
  text('Popular Dive Sites in Florida', 800, 210)

  line(mouseX, 0, mouseX, 563);




}
