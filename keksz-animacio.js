const canvas = document.getElementById('kekszCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const cookieImg = new Image();
cookieImg.src = 'Kepek/Kekszi_raining.png';

const particles = [];
const particleCount = 35;

for (let i = 0; i < particleCount; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 25 + 20,
        speedY: Math.random() * 0.8 + 0.3,
        speedX: Math.sin(Math.random() * Math.PI) * 0.4,
        opacity: Math.random() * 0.6 + 0.3,
        isGlow: Math.random() > 0.5,
        angle: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.02
    });
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.angle += p.spin;

        if (p.y > canvas.height + 40) {
            p.y = -40;
            p.x = Math.random() * canvas.width;
        }

        ctx.save();
        ctx.globalAlpha = p.opacity;

        if (p.isGlow) {

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size / 6, 0, Math.PI * 2);
            ctx.fillStyle = '#e59d43';
            ctx.shadowBlur = 10;
            ctx.shadowColor = '#f5c382';
            ctx.fill();
        } else {
            if (cookieImg.complete && cookieImg.naturalWidth !== 0) {
                ctx.translate(p.x, p.y);
                ctx.rotate(p.angle);
                ctx.drawImage(cookieImg, -p.size / 2, -p.size / 2, p.size, p.size);
            }
        }

        ctx.restore();
    });

    requestAnimationFrame(animate);
}

animate();