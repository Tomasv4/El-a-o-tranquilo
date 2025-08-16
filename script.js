let mazo = [];
for (let i = 1; i <= 13; i++) {
  mazo.push(`Invierno/${i}.png`);
}

let reverso = "Invierno/14.png";
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

// Robar una carta (aparece boca abajo)
function robarCarta() {
  document.getElementById("mensaje").textContent = "";

  if (mazoBarajado.length === 0) {
    document.getElementById("mensaje").textContent = "🎉 No quedan más cartas.";
    document.getElementById("carta").style.display = "none";
    document.getElementById("btn-robar").style.display = "none";
    document.getElementById("btn-voltear").style.display = "none";
    document.getElementById("btn-siguiente").style.display = "none";
    return;
  }

  cartaActual = mazoBarajado.pop(); // toma la siguiente carta
  cartaRevelada = false;

  // Mostrar reverso
  document.getElementById("carta").src = reverso;
  document.getElementById("carta").style.display = "block";

  // Botones visibles
  document.getElementById("btn-robar").style.display = "none";
  document.getElementById("btn-voltear").style.display = "inline-block";
  document.getElementById("btn-siguiente").style.display = "none";
}

// Voltear carta
function voltearCarta() {
  if (cartaActual && !cartaRevelada) {
    document.getElementById("carta").src = cartaActual;
    cartaRevelada = true;

    // Cambiar botones
    document.getElementById("btn-voltear").style.display = "none";
    document.getElementById("btn-siguiente").style.display = "inline-block";
  }
}

// Siguiente jugador
function siguienteJugador() {
  document.getElementById("carta").style.display = "none";
  document.getElementById("btn-siguiente").style.display = "none";
  document.getElementById("btn-voltear").style.display = "none";
  document.getElementById("btn-robar").style.display = "inline-block";
}

// Inicializar
barajar();
