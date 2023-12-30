let numberOfSides = 6; // initially set to standard dice with 6 sides

const NUMBER_OUTPUT = document.getElementById("number");
const NUMBER_OF_SIDES_INPUT = document.getElementById("numberOfSidesInput");

document.getElementById("dice").addEventListener("click", rollDice);

function rollDice() {
  NUMBER_OUTPUT.textContent = getRandomNumberWithinBoundaries();
}

function getRandomNumberWithinBoundaries() {
  return Math.floor(Math.random() * numberOfSides) + 1;
}
  
function setDiceNumber() {
  const NUMBER_GIVEN = NUMBER_OF_SIDES_INPUT.value;

  if (NUMBER_GIVEN < 2 || NUMBER_GIVEN > 100) {
    alert("Number of sides must be between 2 and 100");
    NUMBER_OF_SIDES_INPUT.value = numberOfSides;

    return;
  }

  numberOfSides = NUMBER_GIVEN;
}