// id elementi

const nomeEl = document.getElementById("nome-passeggero");
const distanzaEl = document.getElementById("distanza");
const etàEl = document.getElementById("fascia-età");
const invioEl = document.getElementById("invia-dati");

// funzione bottone

invioEl.addEventListener("click", function () {
  const distanza = distanzaEl.value;
  const età = etàEl.value;
  console.log(distanza);
  console.log(età);
  // variabili calcolo del biglietto

  const costoBigliettoBase = 0.21;
  const costoBiglietto = costoBigliettoBase * distanza;
  const prezzoScontatoMinorenni = costoBiglietto * 0.8;
  const prezzoScontatoOver65 = costoBiglietto * 0.6;

  console.log(costoBigliettoBase);
  console.log(costoBiglietto);
  console.log(prezzoScontatoMinorenni);
  console.log(prezzoScontatoOver65);

  if (età === "Minorenne") {
    alert(prezzoScontatoMinorenni.toFixed(2));
  } else if (età === "Over65") {
    alert(prezzoScontatoOver65.toFixed(2));
  } else {
    alert(costoBiglietto.toFixed(2));
  }
});
