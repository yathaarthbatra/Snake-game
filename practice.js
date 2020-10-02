function init() {
  canvas = document.getElementById("mycanvas");
  W = canvas.width = 500;
  H = canvas.height = 500;

  pen = canvas.getContext("2d");
  //this pen acts as a pen on the canvas

  //to make the rectangle

  //now creating a object rect
  rect = {
    x: 20,
    y: 20,
    h: 30,
    w: 30,
    speed: 10,
  };
}
function draw() {
  pen.clearRect(0, 0, W, H); //clears the rectangle
  //console.log("in draw");
  pen.fillStyle = "red";
  pen.fillRect(rect.x, rect.y, rect.w, rect.h);
}
function update() {
  rect.x += rect.speed;
  if (rect.x > W - rect.w || rect.x < 0) {
    rect.speed *= -1;
  }
}
function gameloop() {
  draw();
  update();
}
init();

setInterval(gameloop, 100);
