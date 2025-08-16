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
let cartaActual = null;
let cartaRevelada = false;

// Barajar mazo
function barajar() {
  mazoBarajado = mazo
    .map(valor => ({ valor, orden: Math.random() }))
    .sort((a, b) => a.orden - b.orden)
    .map(({ valor }) => valor);
}

// Mostrar reverso
function mostrarReverso() {
  document.getElementById("carta").src = "img/back.png";
  document.getElementById("carta").style.display = "block";
  cartaRevelada = false;
}

// Siguiente carta
function siguienteCarta() {
  document.getElementById("mensaje").textContent = "";

  if (mazoBarajado.length === 0) {
    document.getElementById("mensaje").textContent = "🎉 No quedan más cartas.";
    document.getElementById("carta").style.display = "none";
    return;
  }

  cartaActual = mazoBarajado.pop(); // toma la siguiente
  mostrarReverso();
}

// Voltear carta
function voltearCarta() {
  if (!cartaActual) {
    document.getElementById("mensaje").textContent = "Primero saca una carta con 'Siguiente'.";
    return;
  }

  if (!cartaRevelada) {
    document.getElementById("carta").src = cartaActual;
    cartaRevelada = true;
  }
}

// Inicializar
barajar();
siguienteCarta();
