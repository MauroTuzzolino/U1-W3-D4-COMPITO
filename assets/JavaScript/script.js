const tombola = document.getElementById("Tombola");

let allCells = [];

for (let i = 1; i <= 90; i++) {
  let cellaNumero = document.createElement("div");
  cellaNumero.classList.add("cella");
  cellaNumero.textContent = i;
  tombola.appendChild(cellaNumero);
  allCells.push(cellaNumero);
}
//console.log(allCells);

const starterButton = document.getElementById("starterButton");

let numeriEstraibili = [];
for (let i = 1; i <= 90; i++) {
  numeriEstraibili.push(i);
}
//console.log(numeriEstraibili);

function randomNumberGenerator() {
  if (numeriEstraibili.length === 0) {
    console.log("non ci sono più numeri");
  }
  let nRandom = Math.floor(Math.random() * numeriEstraibili.length);
  let numeroEstratto = numeriEstraibili[nRandom];
  //console.log("Numero generato:", numeroEstratto);
  numeriEstraibili.splice(nRandom, 1);
  //console.log(numeriEstraibili);

  return numeroEstratto;
}

const formButton = document.getElementById("formButton");

const areaCartelle = document.getElementById("areaCartelle");

let arrayCelleCartella = [];

formButton.addEventListener("click", function (e) {
  e.preventDefault();
  let inputNumber = document.getElementById("inputCartelle").value;
  for (let j = 0; j < inputNumber; j++) {
    for (let i = 1; i <= 24; i++) {
      let cellaNumeroCartella = document.createElement("div");
      cellaNumeroCartella.classList.add("cellaCartella");
      cellaNumeroCartella.textContent = randomNumberGenerator();
      areaCartelle.appendChild(cellaNumeroCartella);
      arrayCelleCartella.push(cellaNumeroCartella);
    }
  }
  //console.log(arrayCelleCartella);
});

formButton.addEventListener("click", function () {
  areaCartelle.style.display = "grid";
});

starterButton.addEventListener("click", function () {
  let numeroEstratto = randomNumberGenerator();
  if (numeroEstratto > 0 && numeroEstratto <= allCells.length) {
    allCells[numeroEstratto - 1].classList.add("changeColor");
  }
});
