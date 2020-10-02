function init() {
  canvas = document.getElementById("mycanvas");
  W = canvas.width = 500;
  H = canvas.height = 500;
  cs = 30;

  pen = canvas.getContext("2d");

  // //snake object
  snake = {
    init_len: 5,
    color: "red",
    cells: [],
    direction: "right",

    createsnake: function () {
      for (var i = this.init_len; i > 0; i--) {
        this.cells.push({ x: i, y: 0 });
      }
    },
    drawsnake: function () {
      for (var i = 0; i < this.cells.length; i++) {
        pen.fillRect(this.cells[i].x * cs, this.cells[i].y, cs - 2, cs - 2);
      }
    },
  };
  snake.createsnake();
}
init();
function draw() {
  snake.drawsnake();
}
draw();
// function update() { }
// function gameloop() { }
