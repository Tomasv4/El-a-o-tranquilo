const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"];
let estacionIndex = 0;
let mazo = [];
let mazoBarajado = [];
let cartaActual = null;
let cartaRevelada = false;
let juegoTerminado = false;

// Generar mazo de la estación actual
function cargarMazo(estacion) {
  let nuevoMazo = [];
  for (let i = 1; i <= 13; i++) {
    nuevoMazo.push(`${estacion}/${i}.png`);
  }
  return nuevoMazo;
}

function barajar(mazo) {
  return mazo
    .map(valor => ({ valor, orden: Math.random() }))
    .sort((a, b) => a.orden - b.orden)
    .map(({ valor }) => valor);
}

function iniciarJuego() {
  estacionIndex = 0;
  juegoTerminado = false;
  iniciarEstacion();
  document.getElementById("btn-iniciar").style.display = "none";
}

function iniciarEstacion() {
  const estacion = estaciones[estacionIndex];
  document.getElementById("titulo-estacion").textContent = estacion;
  document.getElementById("titulo-estacion").style.display = "block";

  mazo = cargarMazo(estacion);
  mazoBarajado = barajar(mazo);

  document.getElementById("btn-robar").style.display = "inline-block";
  document.getElementById("btn-voltear").style.display = "none";
  document.getElementById("btn-siguiente").style.display = "none";
  document.getElementById("btn-reiniciar").style.display = "none";

  document.getElementById("carta").src = `${estacion}/14.png`; // reverso siempre visible
  document.getElementById("carta").style.display = "block";

  document.getElementById("mensaje").textContent = "";
}

function robarCarta() {
  if (mazoBarajado.length === 0) {
    siguienteEstacion();
    return;
  }

  cartaActual = mazoBarajado.pop();
  cartaRevelada = false;

  const estacion = estaciones[estacionIndex];
  document.getElementById("carta").src = `${estacion}/14.png`; // mostrar reverso

  document.getElementById("btn-robar").style.display = "none";
  document.getElementById("btn-voltear").style.display = "inline-block";
  document.getElementById("btn-siguiente").style.display = "none";
}

function voltearCarta() {
  if (cartaActual && !cartaRevelada) {
    document.getElementById("carta").src = cartaActual;
    cartaRevelada = true;

    // Verificar si es la carta final del invierno
    if (estaciones[estacionIndex] === "Invierno" && (cartaActual.includes("13.png") || mazoBarajado.length === 0)) {
      terminarJuego();
      return;
    }

    document.getElementById("btn-voltear").style.display = "none";
    document.getElementById("btn-siguiente").style.display = "inline-block";
  }
}

function siguienteJugador() {
  document.getElementById("carta").src = `${estaciones[estacionIndex]}/14.png`; // mostrar reverso
  document.getElementById("btn-siguiente").style.display = "none";
  document.getElementById("btn-voltear").style.display = "none";
  document.getElementById("btn-robar").style.display = "inline-block";
}

function siguienteEstacion() {
  estacionIndex++;
  if (estacionIndex < estaciones.length) {
    iniciarEstacion();
  } else {
    terminarJuego();
  }
}

function terminarJuego() {
  juegoTerminado = true;
  document.getElementById("mensaje").textContent = "🌟 El año tranquilo ha terminado 🌟";
  document.getElementById("btn-robar").style.display = "none";
  document.getElementById("btn-voltear").style.display = "none";
  document.getElementById("btn-siguiente").style.display = "none";
  document.getElementById("btn-reiniciar").style.display = "inline-block";
}

function reiniciarJuego() {
  estacionIndex = 0;
  iniciarEstacion();
  document.getElementById("mensaje").textContent = "";
}
