var ground, ball, player
var life = 3;
function preload() {
  playerImage = loadAnimation("player.png", "player2.png", "player3.png", "player4.png", "player5.png", "player6.png")

  bgImage = loadImage("bg_image.jpg")

  ball1 = loadImage("ball1.png")
  ball2 = loadImage("ball2.png")
  ball3 = loadImage("ball3.png")
  ball4 = loadImage("ball4.png")
  ball5 = loadImage("ball5.png")
}



function setup() {
  createCanvas(windowWidth, 400);

  player = createSprite(1100, 200, 50, 50);
  player.addAnimation("Animation", playerImage)

  player.scale = 0.5

  ground = createSprite(width / 2, height - 60, width, 10);
  ground.x = ground.width / 2;
  // ground.velocityX=4

  edges = createEdgeSprites()


}

function draw() {
  background(bgImage);



  if (keyDown("space")) {
    player.velocityY = -10
  }

  player.velocityY = player.velocityY + 1

  if (ground.x > 1100) {
    ground.x = ground.width / 2;
  }

  player.collide(ground)
  spawnObstacle()

  if (player.isTouching(ball)) {
    life = life - 1;
  }

  if (life === 0) {
    text("game over", windowWidth / 2, 200)
  }

  
  drawSprites();
  textSize(20)
  fill("red")
  text("Life" + life, 100, 50)
}

function spawnObstacle() {
  if (frameCount % 100 === 0) {
    ball = createSprite(-50, 220, 20, 20)

    var rand = Math.round(random(1, 5));
    switch (rand) {
      case 1: ball.addImage(ball1);
        break;
      case 2: ball.addImage(ball2);
        break;
      case 3: ball.addImage(ball3);
        break;
      case 4: ball.addImage(ball4);
        break;
      case 5: ball.addImage(ball5);
        break;

      default: break;
    }
    ball.velocityX = 5
    //ball.setSpeed(7, 40)
    //ball.bounceOff(ground)
    ball.scale = 0.2;
    ball.lifetime = 300;
  }

  

  
}