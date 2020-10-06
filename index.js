function init() {
  canvas = document.getElementById("mycanvas");
  W = canvas.width = 1000;
  H = canvas.height = 500;
  cs = 30;
  food = getfood();

  pen = canvas.getContext("2d");

  // //snake object
  snake = {
    init_len: 5,
    color: "red",
    cells: [], //we can also insert the key value pairs in the array
    direction: "right",

    createsnake: function () {
      for (var i = 1; i <= this.init_len; i++) {
        this.cells.push({ x: i, y: 2 });
      }
    },
    drawsnake: function () {
      //we will generate random food
      pen.fillRect(food.x * cs, food.y * cs, cs, cs);

      for (var i = 0; i < this.cells.length; i++) {
        pen.fillRect(
          this.cells[i].x * cs,
          this.cells[i].y * cs,
          cs - 2,
          cs - 2
        );
      }
    },
    updatesnake: function () {
      this.cells.shift(); //removes the first item of the cells array
      //console.log(this.cells[0]);
      len = this.cells.length;
      headX = this.cells[len - 1].x;
      headY = this.cells[len - 1].y;

      var nextX, nextY;
      if (this.direction == "right") {
        nextX = headX + 1;
        nextY = headY;
      } else if (this.direction == "left") {
        nextX = headX - 1;
        nextY = headY;
      } else if (this.direction == "down") {
        nextX = headX;
        nextY = headY + 1;
      } else {
        //up
        nextX = headX;
        nextY = headY - 1;
      }
      if (headX == food.x && headY == food.y) {
        console.log("Food eaten");
        food = getfood();
        this.cells.push({ x: nextX, y: nextY });
      }

      //GAME OVER CONDITION
      if (nextX * cs > W - cs) {
        console.log("Game Over");
        clearInterval(timer);
        alert("Game over");
      } else if (nextX * cs - cs < 0) {
        console.log("Game Over");
        clearInterval(timer);
        alert("Game over");
      } else if (nextY * cs > H - cs) {
        console.log("Game Over");
        clearInterval(timer);
        alert("Game over");
      } else if (nextY * cs - cs < 0) {
        console.log("Game Over");
        clearInterval(timer);
      }

      this.cells.push({ x: nextX, y: nextY });
      pen.clearRect(0, 0, W, H);
      snake.drawsnake();
    },
  };
  snake.createsnake();

  //ARROW KEYS
  function keypressed(e) {
    // console.log("key pressed", e.key);
    if (e.key == "ArrowRight") {
      snake.direction = "right";
    } else if (e.key == "ArrowDown") {
      snake.direction = "down";
    } else if (e.key == "ArrowLeft") {
      snake.direction = "left";
    } else {
      snake.direction = "up";
    }
    console.log(snake.direction);
  }
  document.addEventListener("keydown", keypressed);

  // snake.drawsnake();
  // snake.updatesnake();
}
init();
function getfood() {
  //we will create random x and Y coordinates
  var foodX = Math.round((Math.random() * (W - cs)) / cs);
  var foodY = Math.round((Math.random() * (H - cs)) / cs);
  var food = {
    x: foodX,
    y: foodY,
    color: "red",
  };
  return food;
}

function gameloop() {
  snake.drawsnake();
  snake.updatesnake();
}
timer = setInterval(() => {
  gameloop();
}, 100);

// function drawsnake() {
//   snake.drawsnake();
// }
// function updatesnake() {
//   snake.updatesnake();
// }
// function gameloop() {
//   drawsnake();
//   updatesnake();
// }
// setInterval(() => {
//   gameloop();
// }, 100);
