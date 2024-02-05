const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "green";

ctx.beginPath();
ctx.arc(75, 75, 10, 0, Math.PI * 2);
ctx.stroke();
