let numberOfSides = 6;

document.getElementById("dice").addEventListener("click", rollDice);

function rollDice() {
  document.getElementById("number").textContent = getRandomNumberWithinBoundaries();
}

function getRandomNumberWithinBoundaries() {
  return Math.floor(Math.random() * numberOfSides) + 1;
}
  
function setDiceNumber() {
  let number = document.getElementById("numberOfSidesInput").value;

  if (number < 2 || number > 100) {
    alert("Number of sides must be between 2 and 100");
    document.getElementById("numberOfSidesInput").textContent = numberOfSides;
 
    return;
  }

  numberOfSides = number;
}