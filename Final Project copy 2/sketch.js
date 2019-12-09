let bg;
let snowflakes = [];
var animatedSprite;
var score = 0;
var coins;
var shark;
var shark2;
var shark3;
let x = 0;
let y = 0;
var direction = 90;
var direction1 = 95
var gameOver;




function setup() {
  createCanvas(1000, 750);
  bg = loadImage('assets/Atlantis.jpg');

  changeDirection = false;
  coins = new Group();
  for (var i = 0; i < 10; i++) {
    var c = createSprite(
      random(100, width-100),
      random(100, height-100),
      10, 10);
    c.shapeColor = color(255, 255, 0);
    coins.add(c);
  }

  var animation = loadAnimation('assets/dolphin1.png', 'assets/dolphin2.png', 'assets/dolphin3.png','assets/dolphin4.png','assets/dolphin5.png','assets/dolphin6.png');
  animatedSprite = createSprite(200, 550);
  animatedSprite.addAnimation('floating',animation);

  shark = createSprite(800, 200);
  shark.addAnimation('floating', 'assets/shark1.png', 'assets/shark2.png', 'assets/shark3.png');

  shark2 = createSprite(600, 500);
  shark2.addAnimation('floating', 'assets/shark1.png', 'assets/shark2.png', 'assets/shark3.png');

  shark3 = createSprite(0, 450);
  shark3.addAnimation('floating', 'assets/shark1.png', 'assets/shark2.png', 'assets/shark3.png');

  shark4 = createSprite(0, 200);
  shark4.addAnimation('floating', 'assets/shark1.png', 'assets/shark2.png', 'assets/shark3.png');
}

function draw() {

  if(gameOver)
    newGame();

    if(animatedSprite.collide(shark))
      die();
      textSize(50);
      text("you dead! reload to restart", 200, height/2);

      if(animatedSprite.collide(shark2))
        die();
        textSize(50);
        text("you dead! reload to restart", 200, height/2);

        if(animatedSprite.collide(shark3))
          die();
          textSize(50);
          text("you dead! reload to restart", 200, height/2);

          if(animatedSprite.collide(shark4))
            die();
            textSize(50);
            text("you dead! reload to restart", 200, height/2);

  background(bg);



  direction += 0.5;
    //speed, angle
    shark.setSpeed(2, direction);
    circle.rotateToDirection = true;

  direction += 0.5;
      //speed, angle
    shark2.setSpeed(2, direction);
    circle.rotateToDirection = true;

        //speed, angle
    direction1 += 5;
    shark3.setSpeed(2);

    direction1 += 5;
    shark4.setSpeed(2);

  let t = frameCount / 60;


  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake());
     // append snowflake object
  }

  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display();
     // draw snowflake
  }



animatedSprite.overlap(coins, getCoin);

  textSize(32);
  fill(0,0,0)
  text('Dolphin Dasher', 100, 100);

  textSize(20);
  fill(0,0,0)
  text('Collect all coins without getting eaten by sharks', 100, 130);
  text('CLICK SCREEN to begin; navigate using arrow keys', 100, 160);
  text('Press space to stop moving', 100, 190);

  drawSprites();



  textSize(72);
  textAlign(CENTER, CENTER);
  fill(0,0,0);
  if (coins.length > 0) {
    text("Score: " + score, 800, 100);
  }
  else {
    text("you win!", width/2, height/2);
  }

}

function getCoin(player, coin) {
  coin.remove();
  score += 1;
}



function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    animatedSprite.setSpeed(3, 0);
  }
  else if (keyCode == DOWN_ARROW) {
    animatedSprite.setSpeed(3, 90);
  }
  else if (keyCode == LEFT_ARROW) {
    animatedSprite.setSpeed(3, 180);
  }
  else if (keyCode == UP_ARROW) {
    animatedSprite.setSpeed(3, 270);
  }
  else if (key == ' ') {
    animatedSprite.setSpeed(0, 0);
  }
  return false;
}

function snowflake() {
  // initialize coordinates

  fill(0,0,40,50);
  noStroke();

  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}
