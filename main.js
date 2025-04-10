// id elementi

const nomeEl = document.getElementById("nome-passeggero");
const distanzaEl = document.getElementById("distanza");
const etàEl = document.getElementById("fascia-età");
const invioEl = document.getElementById("invia-dati");
const casellaNome = document.getElementById("nome-passeggero-tabella");
const casellaCosto = document.getElementById("costo-biglietto-tabella");

// funzione bottone

invioEl.addEventListener("click", function () {
  const passeggero = nomeEl.value;
  const distanza = distanzaEl.value;
  const età = etàEl.value;
  console.log(passeggero);
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
    casellaCosto.textContent = "€" + prezzoScontatoMinorenni.toFixed(2);
    casellaNome.textContent === passeggero;
  } else if (età === "Over65") {
    casellaCosto.textContent = "€" + prezzoScontatoOver65.toFixed(2);
    casellaNome.textContent === passeggero;
  } else {
    casellaCosto.textContent = "€" + costoBiglietto.toFixed(2);
    casellaNome.textContent === passeggero.textContent;
  }
  return casellaCosto, casellaNome;
});
