var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// Rectangle
c.fillStyle = 'rgba(255, 0, 0, 0.1)'
c.fillRect(100, 100, 100, 100);

c.fillStyle = 'rgba(0, 0, 255, 0.1)'
c.fillRect(400, 100, 100, 100);
console.log(canvas);

// Line
c.beginPath();
c.moveTo(200, 200);
c.lineTo(300, 200);
c.lineTo(300, 300);
c.lineTo(400, 300);
c.lineTo(400, 400);
c.strokeStyle = "red";
c.stroke();

// Arc:
// c.arc(x: int, y: Int, r: Int, startAngle: Float, endAngle: Float,
//     drawCounterClockwise: Bool (false));
c.beginPath();
c.arc(500, 500, 30, 0, Math.PI * 2, false);
c.strokeStyle = 'blue';
c.stroke();

// fore loop
for(let i = 1; i < 100; i++) {

    let color = ['red', 'yellow', 'blue', 'red', 'green', 'black']
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let r = Math.random() * 1000;

    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.strokeStyle = color[Math.floor(Math.random(6)*Math.floor(7))];
    // [color](Math.floor(Math.random(6)*Math.floor(7)));
    c.stroke();
}