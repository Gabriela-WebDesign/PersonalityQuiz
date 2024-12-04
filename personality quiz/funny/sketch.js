let buja = 0;
let bujaV= 0.02;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  buja = buja + bujaV
  rotate(buja)
  if (buja > 0.5)
    {
      bujaV=-bujaV
    }
  if (buja <-0.5)
    {
      bujaV= - bujaV
    }
  push()
  fill(246, 242, 23);
  ellipse(300, 250, 100)
  fill(0)
  ellipse(280, 235, 10);
  ellipse(320, 235, 10);
  fill(255)
  arc(300, 255, 50, 50, 0, PI, CHORD)
  fill(60, 171, 233)
  push()
  translate(270, 250);
  rotate(0.75);
  ellipse(0, 0, 10, 15);
  ellipse(3, 20, 10, 15)
  pop();
  push()
  translate (330, 250)
  rotate(-0.78)
  ellipse(0, 0, 10, 15);
  ellipse(-3, 20, 10, 15)
  pop()
//  fill(249, 235, 213)
//  ellipse(125, 150, 75)
//  fill(255,0,0)
//  ellipse(125, 110, 50, 20);
//  ellipse(125, 105, 40, 15);
//  ellipse(125, 90, 30, 20);
//  fill(0)
//  ellipse(110, 140, 10)
 // ellipse(135, 140, 10)
}