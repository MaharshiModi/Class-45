function setup() {
  createCanvas(800,400);
  form1=new Form();


}

function draw() {
  background(255,255,255); 
  form1.display(); 
  drawSprites();
}