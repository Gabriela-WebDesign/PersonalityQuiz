let points = [];
let speed = 1; 
let amplitude = 30;
let baseHeight;  

function setup() {
  createCanvas(400, 400);
  baseHeight = height - 50; 
  for (let x = 0; x < width; x++) {
    points.push(baseHeight);
  }
}

function draw() {
  background(0);
  
  stroke(15, 244, 36);
  strokeWeight(2);
  noFill();
  beginShape();
  for (let x = 0; x < points.length; x++) {
    vertex(x, points[x]);
  }
  endShape();

  updateEKG();
}

function updateEKG() {
  points.shift();
  let newPoint = baseHeight;
  if (frameCount % 100 < 20) {
    newPoint -= amplitude; // Peak
  } else if (frameCount % 100 < 30) {
    newPoint += amplitude / 2; // Dip
  }

  points.push(newPoint);
stroke(0)
  //bandaid
  strokeWeight(0.5)
  fill(206, 175, 97);
  ellipse(170, 190, 120, 60);
  ellipse(230, 190, 120, 60);
  fill(232, 204, 134);
  rect(170, 160, 60, 60);
  fill(240, 223, 181);
  ellipse (200, 200, 5, 5);
  ellipse (180, 210, 5, 5);
  ellipse (220, 210, 5, 5);
  ellipse (220, 190, 5, 5);
  ellipse (180, 190, 5, 5);
  ellipse (200, 180, 5, 5);
  ellipse (220, 170, 5, 5);
  ellipse (180, 170, 5, 5);
  // cross
  fill(255, 0, 0);
  strokeWeight(0)
  rect(300, 30, 50, 100);
  rect(275, 55, 100, 50);
  /// heart
  fill(255, 0, 0);
  noStroke();

  beginShape();
  vertex(75, 125);
  bezierVertex(25, 75, 25, 25, 75, 50);  
  bezierVertex(125, 25, 125, 75, 75, 125); 
  endShape(CLOSE);



}