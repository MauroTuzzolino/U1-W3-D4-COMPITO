const tombola = document.getElementById("Tombola");

let allCells = [];

for (let i = 1; i <= 99; i++) {
  let cellaNumero = document.createElement("div");
  cellaNumero.classList.add("cella");
  cellaNumero.textContent = i;
  tombola.appendChild(cellaNumero);
  allCells.push(cellaNumero);
}
//console.log(allCells);

const starterButton = document.getElementById("starterButton");

let numeriEstraibili = [];
for (let i = 1; i <= 99; i++) {
  numeriEstraibili.push(i);
}
//console.log(numeriEstraibili);

starterButton.addEventListener("click", function () {
  if (numeriEstraibili.length === 0) {
    console.log("non ci sono più numeri");
  }
  let nRandom = Math.floor(Math.random() * numeriEstraibili.length);
  let numeroEstratto = numeriEstraibili[nRandom];
  //console.log("Numero generato:", numeroEstratto);
  numeriEstraibili.splice(nRandom, 1);
  //console.log(numeriEstraibili);

  if (numeroEstratto > 0 && numeroEstratto <= allCells.length) {
    allCells[numeroEstratto - 1].classList.add("changeColor");
  }
});
