const envelope = document.querySelector(".envelope");
const button = document.getElementById("goToFlowers");
const music = document.getElementById("bg-music");

envelope.addEventListener("click", () => {
  envelope.classList.toggle("open");

  if (envelope.classList.contains("open")) {
    // Reproducir la música al abrir la carta
    if (music.paused) {
      music.play().catch(err => {
        console.log("El navegador bloqueó el autoplay:", err);
      });
    }

    // Mostrar botón después de 1 segundo
    setTimeout(() => {
      button.classList.add("show");
    }, 1000);

    // Lanzar lluvia de corazones por 2 segundos
    rainHearts(2000); 
  } else {
    button.classList.remove("show");
  }
});

button.addEventListener("click", (event) => {
  event.stopPropagation();
  window.location.href = "index1.html";
});

// 🌸 Función para lluvia de corazones
function rainHearts(duration) {
  const interval = setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "❤️";

    // Posición aleatoria
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";

    document.body.appendChild(heart);

    // Eliminar después de caer
    setTimeout(() => {
      heart.remove();
    }, 3000);
  }, 200);

  // Detener después de "duration"
  setTimeout(() => clearInterval(interval), duration);
}