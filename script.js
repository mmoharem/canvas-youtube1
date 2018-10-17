
var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');


var x = 200;
var dx = 4;
function animate() {
    requestAnimationFrame(animate);
    // Clear cavas
    
    
    x += dx;

    let y = MouseEvent.clientY;
    // var x = event.clientX;
    // console.log(x);

    
    if(x < innerWidth) {
        dx = dx
    } else if(x > innerWidth) {
        dx = -dx
    }
    c.clearRect(0, 0, innerWidth, innerHeight);
    c.beginPath();
    c.arc(x, 200, 30, 0, Math.PI * 2, false); 
    c.strokeStyle = 'red';
    c.stroke();
    
}

animate();


