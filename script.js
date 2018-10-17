
var canvas = document.querySelector('canvas');

canvas.width = innerWidth;
canvas.height = innerHeight;

var c = canvas.getContext('2d');
////////////////////////////////////////////////////

function Circle(x, y, dy, dx, r) {
     this.x = x;
     this.y = y;
     this.dx = dx;
     this.dy = dy;
     this.r = r;

     this.draw = function() {
        // c.clearRect(0, 0, innerWidth, innerHeight);
        c.beginPath();
        c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false); 
        c.strokeStyle = 'red';
        c.stroke();
     }

     this.update = function() {

        
        
        
        if (this.x + this.r > innerWidth || this.x - this.r < 0){
            this.dx = -this.dx;
        }
        if (this.y + this.r > innerHeight || this.y - this.r < 0){
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;
        this.draw();
     }   
}

let x = Math.random() * innerWidth;
    let y = Math.random() * innerHeight;
    let r = 90;
    let dx = (Math.floor(Math.random(6)*Math.floor(7))) + 1;
    let dy = (Math.floor(Math.random(6)*Math.floor(7))) + 1;

    
function animate() {
    requestAnimationFrame(animate);
    // Clear cavas
   
    var c = new Circle(x, y, dy, dx, r);
    // var c = new Circle(200, 200, 3, 3, 30);
    c.update();
    // c.draw();
    

}

animate();


