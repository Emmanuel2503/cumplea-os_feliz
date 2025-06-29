// Confeti al cargar la página
window.addEventListener("load", () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
});

// Botón de confeti manual
document.getElementById("btnConfetti").addEventListener("click", () => {
  confetti({
    particleCount: 200,
    spread: 100,
  });
});

// Confeti periódico
setInterval(() => {
  confetti({
    particleCount: 150,
    spread: 80,
    scalar: 1.2, // tamaño ligeramente mayor
    origin: { y: 0.6 },
  });
}, 5 * 1000);

// Botón de audio
const audio = new Audio("./assets/audios/cumple.mp3");
document.getElementById("btnAudio").addEventListener("click", () => {
  audio.play();
});

// Configuración
const colors = [
  "#FF5C5C",
  "#FFD93D",
  "#6BCB77",
  "#4D96FF",
  "#B983FF",
  "#FF7EB3",
];
const maxBalloons = 20;
const container = document.getElementById("balloons-container");

// Función para crear un globo
function createBalloon() {
  const b = document.createElement("div");
  b.classList.add("balloon");
  // color aleatorio
  b.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  // posición horizontal aleatoria
  b.style.left = Math.random() * 100 + "vw";
  // duración aleatoria entre 8 y 16s
  const duration = Math.random() * 8 + 8;
  b.style.animationDuration = duration + "s";
  // tamaño aleatorio
  const size = Math.random() * 20 + 30; // 30px–50px ancho
  b.style.width = size + "px";
  b.style.height = size * 1.3 + "px";
  container.appendChild(b);

  // Borra el globo tras la animación
  setTimeout(() => container.removeChild(b), duration * 1000);
}

// Genera globos periódicamente, sin sobrepasar el máximo
setInterval(() => {
  if (container.children.length < maxBalloons) {
    createBalloon();
  }
}, 800);
