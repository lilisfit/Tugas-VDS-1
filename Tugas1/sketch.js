let circle = [];
let square = [];
let morph = [];
let state = false;

function setup() {
  createCanvas(800, 400);

  for (let angle = 0; angle < 360; angle += 9) {
    let v = p5.Vector.fromAngle(radians(angle - 135));
    v.mult(100);
    circle.push(v);
    morph.push(createVector());
  }

  // A square is a bunch of vertices along straight lines
  // Top of square
  for (let x = -50; x < 50; x += 10) {
    square.push(createVector(x, -50));
  }
  // Right side
  for (let y = -50; y < 50; y += 10) {
    square.push(createVector(50, y));
  }
  // Bottom
  for (let x = 50; x > -50; x -= 10) {
    square.push(createVector(x, 50));
  }
  // Left side
  for (let y = 50; y > -50; y -= 10) {
    square.push(createVector(-50, y));
  }
}

function draw() {
  background("#ADD8E6");
  line(400,0,400,400)
  
  
  //bunga di kiri
  push();
  fill("#FFAA1D")
  translate(125, 135);
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 5, 10, 40);
    rotate(PI/5);
  }
  pop();
  
  push();
  fill("	#FF4500")
  translate(160, 135);
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 5, 10, 40);
    rotate(PI/5);
  }
  pop();

  push();
  fill("	#DDA0DD")
  translate(195, 135);
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 5, 10, 40);
    rotate(PI/5);
  }
  pop();
  
  push();
  fill("	#EE82EE")
  translate(230, 135);
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 5, 10, 40);
    rotate(PI/5);
  }
  pop();
  
  push();
  fill("	#40E0D0")
  translate(265, 135);
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 5, 10, 40);
    rotate(PI/5);
  }
  pop();
  
  
  let totalDistance = 0;

  for (let i = 0; i < circle.length; i++) {
    let v1;
    if (state) {
      v1 = circle[i];
    } else {
      v1 = square[i];
    }

    let v2 = morph[i];
    v2.lerp(v1, 0.1);

    totalDistance += p5.Vector.dist(v1, v2);
  }

 
  if (totalDistance < 0.1) {
    state = !state;
  }

  fill(0,0,0)
  ellipse(170,170,25,1)
  ellipse(230,170,15,20)
  arc(200,230,40,3,0,PI)

  fill(255,255,0)
  ellipse(600,200,200,200)
  fill(0,0,0)
  ellipse(570,170,15,20)
  ellipse(630,170,25,1)
  arc(600,230,40,3,0,PI)
  
  push();
  fill("#FFAA1D")
  translate(525, 135);
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 5, 10, 40);
    rotate(PI/5);
  }
  pop();
  
  push();
  fill("	#FF4500")
  translate(560, 135);
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 5, 10, 40);
    rotate(PI/5);
  }
  pop();

  push();
  fill("	#DDA0DD")
  translate(595, 135);
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 5, 10, 40);
    rotate(PI/5);
  }
  pop();
  
  push();
  fill("	#EE82EE")
  translate(630, 135);
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 5, 10, 40);
    rotate(PI/5);
  }
  pop();
  
  push();
  fill("	#40E0D0")
  translate(665, 135);
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 5, 10, 40);
    rotate(PI/5);
  }
  pop();

  translate(width / 4, height / 2);
  strokeWeight(4);
  beginShape();
  noFill();
  stroke(0);

  morph.forEach(v => {
    vertex(v.x, v.y);
  });
  endShape(CLOSE);
  
 
}