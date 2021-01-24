var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

c.globalCompositeOperation = 'destination-over'

phase = 1;
z = 0;
zoff = 0.03;
animate();

function circle(z) {

    c.strokeStyle = "white";
    c.fillStyle = "white";

    c.beginPath();
    w = canvas.width / 2;
    h = canvas.height / 2;

    for (let a = 0; a <= Math.PI * 2; a += 0.001) {

        xoff = Math.cos(a + phase) + 1;
        yoff = Math.sin(a + phase) + 1;
        r = PerlinNoise.noise(xoff, yoff, z) * 100 + 200;

        x = r * Math.cos(a) + w;
        y = r * Math.sin(a) + h;

        c.lineTo(x, y);
    }
    c.closePath();
    c.stroke();
    c.fill();
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, window.innerWidth, window.innerHeight);

    circle(z += zoff);
}
