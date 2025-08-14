const icons = document.querySelectorAll('.icon');
const centerX = window.innerWidth / 2;
const centerY = window.innerHeight / 2;
const radius = 275;

// 1️⃣ Datos iniciales de cada icono
const iconData = Array.from(icons).map(() => ({
  angle: Math.random() * 2 * Math.PI,       // ángulo inicial aleatorio
  speed: 0.005 + Math.random() * 0.005,     // velocidad diferente por icono
  offsetX: Math.random() * 50 - 25,         // movimiento lateral aleatorio
  offsetY: Math.random() * 50 - 25,         // movimiento vertical aleatorio
  wobbleSpeed: 0.002 + Math.random() * 0.0002  // velocidad del vaivén
}));

function animate(time) {
  icons.forEach((icon, i) => {
    const data = iconData[i];

    // Movimiento circular base + oscilación aleatoria
    const x = centerX + Math.cos(data.angle) * radius + Math.sin(time * data.wobbleSpeed) * data.offsetX;
    const y = centerY + Math.sin(data.angle) * radius + Math.cos(time * data.wobbleSpeed) * data.offsetY;

    icon.style.left = `${x}px`;
    icon.style.top = `${y}px`;

    // Actualizar ángulo
    data.angle += data.speed;
  });

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);


let text = document.getElementById("title");
let pos = 0;


// 2️⃣ Animación de Texto que no se aprecia
function animateText() {
  pos += 1;
  text.style.backgroundPosition = `${pos}px 0`;
  requestAnimationFrame(animateText);
}

text.style.backgroundSize = "200% 100%";
animateText();


// 3️⃣ Reacción de iconos al mover el ratón
document.addEventListener("mousemove", (e) => {
  icons.forEach((icon, i) => {
    let dx = e.clientX - parseFloat(icon.style.left || 0);
    let dy = e.clientY - parseFloat(icon.style.top || 0);
    icon.style.transform = `translate(${dx * 0.05}px, ${dy * 0.05}px)`;
  });
});

// 4️⃣ Partículas brillantes aleatorias
function createParticle() {
  const p = document.createElement("div");
  p.className = "particle";
  p.style.left = Math.random() * window.innerWidth + "px";
  p.style.top = Math.random() * window.innerHeight + "px";
  document.body.appendChild(p);
  setTimeout(() => p.remove(), 4000);
}

setInterval(createParticle, 200);

// 5️⃣ Frases Aleatorias
const frases = ["🌊 Bienvenido", "🚀 Innovación", "💡 Creatividad", "⚡ Velocidad"];
let i = 0;

setInterval(() => {
  i = (i + 1) % frases.length;
  document.getElementById("center-text").textContent = frases[i];
}, 2000);