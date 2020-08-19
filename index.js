var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

c.globalCompositeOperation = 'destination-over'
phase = 1;
z = 0;
zoff = 0.05;
animate();



function circle(z) {
    
    c.strokeStyle = "white";

    

    c.beginPath();
    w = canvas.width / 2;
    h = canvas.height / 2;


    for (let a = 0; a <= Math.PI * 2; a += 0.01) {

        //n = PerlinNoise.noise(size * x, size * y, .8);
        xoff = Math.cos(a+phase) + 1;
        yoff = Math.sin(a+phase) + 1;
        r = PerlinNoise.noise(xoff, yoff, z) *100 +100;

        x = r * Math.cos(a)+w;
        y = r * Math.sin(a) +h;

        c.lineTo(x, y);
        c.moveTo(x, y);
    }
    c.closePath();
    c.stroke();
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, window.innerWidth, window.innerHeight);

    circle(z += zoff);
}


/*for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {

        x /= 10;
        y /= 10; // normalize
        size = 10;  // pick a scaling value
        n = PerlinNoise.noise(size * x, size * y, .8);
        r = g = b = Math.round(255 * n);
        console.log(r);
    }
}*/
