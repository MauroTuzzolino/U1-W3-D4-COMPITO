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

starterButton.addEventListener("click", function () {
  let nRandom = Math.floor(Math.random() * allCells.length) + 1;
  console.log("Numero generato:", nRandom);

  if (nRandom >= 0 && nRandom < allCells.length) {
    allCells[nRandom - 1].classList.add("changeColor");
  }
});
