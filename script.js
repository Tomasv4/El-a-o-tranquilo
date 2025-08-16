let mazo = [
  "Invierno/1.png",
  "Invierno/2.png",
  "Invierno/3.png",
  "Invierno/4.png",
  "Invierno/5.png",
  "Invierno/6.png",
  "Invierno/7.png",
  "Invierno/8.png",
  "Invierno/9.png",
  "Invierno/10.png",
  "Invierno/11.png",
  "Invierno/12.png",
  "Invierno/13.png"
];

let mazoBarajado = [];

// Barajar
function barajar() {
  mazoBarajado = mazo
    .map(valor => ({ valor, orden: Math.random() }))
    .sort((a, b) => a.orden - b.orden)
    .map(({ valor }) => valor);
}

function sacarCarta() {
  if (mazoBarajado.length === 0) {
    barajar(); // re-baraja si ya no hay cartas
  }
  let carta = mazoBarajado.pop();
  document.getElementById("carta").src = carta;
  document.getElementById("carta").style.display = "block";
}

// Barajar al inicio
barajar();
