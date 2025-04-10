// id elementi

const nomeEl = document.getElementById("nome-passeggero");
const distanzaEl = parseInt(document.getElementById("distanza"));
const etàEl = document.getElementById("fascia-età");
const invioEl = document.getElementById("invia-dati");
const over65 = document.getElementById("over65");
const minorenne = document.getElementById("minorenne");
console.log(nomeEl);
console.log(distanzaEl.value);
console.log(etàEl);
console.log(invioEl);
console.log(over65);
console.log(minorenne);

// variabili calcolo del biglietto

const nomeValue = nomeEl.value;
const distanzaValue = distanzaEl.valueOf;
const etàValue = etàEl.value;
const costoBigliettoBase = 0.21;
let costoBiglietto = costoBigliettoBase * distanzaValue;

console.log(costoBigliettoBase);
console.log(costoBiglietto);
// calcolo costo biglietto

invioEl.addEventListener("click", function () {
  if (minorenne === true) {
    costoBiglietto = costoBiglietto * 0.8;
  } else if (over65 === true) {
    costoBiglietto = costoBiglietto * 0.6;
  } else {
    costoBiglietto = costoBiglietto * distanzaValue;
  }
  alert(costoBiglietto);
  console.log(costoBiglietto);
  return costoBiglietto;
});
