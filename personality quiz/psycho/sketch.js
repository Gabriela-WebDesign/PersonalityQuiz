let mouth=130;
let teeth= 142;
let mouthspeed = 0.75;
let angle = 0;          
let swingSpeed = 0.5; 
let maxAngle = 40;      
let direction = 1;  


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  angleMode(DEGREES);
   strokeWeight(1)
  ellipse(mouseX, mouseY, 10, 10)
  drawMousePosition();
  // knife
  noFill()
  arc (80, 120, 190, 40, 0, 400, OPEN);
  line (105, 120, 175, 120);
  fill(0, 0, 0);
  rect(65, 120, 40, 20);
  // Axe
  push();
  translate(195, 360); // Pivot point at the bottom of the axe
  rotate(angle); // Rotate the axe around its pivot point
  
  // Axe handle
  fill(0);
  rect(-5, -150, 10, 150); // The handle extends upward
  
  // Axe blade
  fill(221, 221, 221);
  triangle(-5, -130, 25, -160, 25, -100); // Right blade
  triangle(-5, -130, -35, -160, -35, -100); // Left blade
  
  pop();
  angle += swingSpeed * direction;
  if (angle > maxAngle || angle < -maxAngle) {
    direction *= -1;
  }
  
  //skull
  fill(0,0,0);
  ellipse (300, 100, 60, 60);
  rect(275, 118, 50, 15);
  rect(285, mouth, 30, 20);
  fill(255, 255, 255);
  ellipse (285, 100, 15);
  ellipse (310, 100, 15);
  triangle (300, 115, 292, 124, 308, 124)
  rect (290, teeth, 3, 8);
  rect (294, teeth, 3, 8);
  rect (298, teeth, 3, 8);
  rect (302, teeth, 3, 8);
  rect (306, teeth, 3, 8);
  mouth = mouth + mouthspeed
  if (mouth> 140)
    {
      mouthspeed = - mouthspeed
    }
  if (mouth < 130)
    {
      mouthspeed = - mouthspeed
    }
  teeth = teeth + mouthspeed
  
}
function drawMousePosition() {
  let strMouseCoor = "x:" + mouseX + ", y:" + mouseY;
  textSize(12);
  text(strMouseCoor, 30, 30);
}