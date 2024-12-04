let y=210;
let firedis = 0;
let speed= 0.5;
let zap = 280
let col = 35
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(212, 123, 123);
  stroke(0);
  strokeWeight(7);
  fill(255);
  line (150, zap+45, 180, zap);
  strokeWeight (2);
  fill(148, col, 22)
  ellipse (180, zap, 15, 20);
  fill(81, 72, 58);
  rect(188, y, 40, 80);
  
  zap= zap- speed
  if (zap< 200)
    {
      firedis= firedis+ 100
      speed= 0
      col = 100
    }

let baseX = 180;
  let baseY = 200;

  let scale1 = 0.6;
  stroke(0, firedis)

  fill(255, 140, 0, firedis);
  beginShape();
  vertex(baseX, baseY);
  bezierVertex(
    baseX - 60 * scale1, baseY - 40 * scale1, 
    baseX - 50 * scale1, baseY - 120 * scale1, 
    baseX, baseY - 140 * scale1
  );
  bezierVertex(
    baseX + 50 * scale1, baseY - 120 * scale1, 
    baseX + 60 * scale1, baseY - 40 * scale1, 
    baseX, baseY
  );
  endShape(CLOSE);

  fill(255, 69, 0, firedis);
  beginShape();
  vertex(baseX, baseY);
  bezierVertex(
    baseX - 40 * scale1, baseY - 30 * scale1, 
    baseX - 30 * scale1, baseY - 100 * scale1, 
    baseX, baseY - 120 * scale1
  );
  bezierVertex(
    baseX + 30 * scale1, baseY - 100 * scale1, 
    baseX + 40 * scale1, baseY - 30 * scale1, 
    baseX, baseY
  );
  endShape(CLOSE);

  fill(255, 255, 0, firedis);
  beginShape();
  vertex(baseX, baseY - 60 * scale1);
  bezierVertex(
    baseX - 20 * scale1, baseY - 40 * scale1, 
    baseX - 10 * scale1, baseY - 90 * scale1, 
    baseX, baseY - 110 * scale1
  );
  bezierVertex(
    baseX + 10 * scale1, baseY - 90 * scale1, 
    baseX + 20 * scale1, baseY - 40 * scale1, 
    baseX, baseY - 60 * scale1
  );
  endShape(CLOSE);

}
