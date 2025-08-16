let mazo = [
  "img/carta1.png",
  "img/carta2.png",
  "img/carta3.png",
  "img/carta4.png",
  "img/carta5.png",
  "img/carta6.png",
  "img/carta7.png",
  "img/carta8.png",
  "img/carta9.png",
  "img/carta10.png",
  "img/carta11.png",
  "img/carta12.png",
  "img/carta13.png"
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
