const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
// ctx.fillStyle = "green";

// ctx.beginPath();
// ctx.arc(75, 75, 10, 0, Math.PI * 2);
// ctx.stroke();

// 初期位置
let x = 100;
let y = 100;

function draw() {
  // 描画前に画面をクリア
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 図形を描画
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, 2 * Math.PI);
  ctx.fillStyle = "blue";
  ctx.fill();

}

addEventListener("click", (event) => draw());