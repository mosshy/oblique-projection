const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
// ctx.fillStyle = "green";

// ctx.beginPath();
// ctx.arc(75, 75, 10, 0, Math.PI * 2);
// ctx.stroke();

// 初期位置
let x = 100;
let y = 100;

let t = 0;


function draw() {
  // 描画前に画面をクリア
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //重力加速度
  let gt = 0.5 * 9.8 * t**2;

  // 図形を描画
  ctx.beginPath();
  ctx.arc(x, y, 50, 0, 2 * Math.PI);
  ctx.fillStyle = "blue";
  ctx.fill();

  // 位置を更新
  x += 1;
  y = 100 - gt;
  t += 1;
  console.log(t);

  // 次の描画を予約
  requestAnimationFrame(draw);
}

addEventListener("click", (event) => draw());