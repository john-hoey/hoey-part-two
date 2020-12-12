let rainInches = null;
let rainDisplay = null;
let estimatedBushelYield = 50;
let bushelYield = null;
let usedFertilizer = null;
let qualityFertilizer = null;
let finalYield = null;

function isNumber(value) {
  const numberPattern = /^[0-9]+$/;
  return numberPattern.test(value);
}

function rainfallAsk() {
  rainInches = prompt("How many inches of rain fell?");
  while (rainInches === null || !isNumber(rainInches)) {
    rainInches = prompt(
      "That is not a valid number. Please enter the amount of rain in inches using digits. (0-9)"
    );
  }
}

rainfallAsk();
rainDisplay = "*".repeat(rainInches);
console.log(rainDisplay);

function rainYieldCalc(a) {
  if (rainInches >= 20) {
    bushelYield = estimatedBushelYield * 0.9;
    console.log(
      "Accounting for a wetter than average season, (" +
        rainInches +
        " inches of rainfall) your estimated yield is " +
        bushelYield +
        " bushels per acre."
    );
  } else if (rainInches <= 10) {
    bushelYield = estimatedBushelYield * 0.8;
    console.log(
      "Accounting for a dryer than average season, (" +
        rainInches +
        " inches of rainfall) your estimated yield is " +
        bushelYield +
        " bushels per acre."
    );
  } else {
    bushelYield = estimatedBushelYield;
    console.log(
      "Accounting for an average amount of rainfall this season, (" +
        rainInches +
        " inches of rainfall) your estimated yield is " +
        bushelYield +
        " bushels per acre."
    );
  }
}

rainYieldCalc(rainInches);

function fertAsk() {
  usedFertilizer = prompt("Did you use fertilizer?");
  while (
    usedFertilizer === null ||
    !(usedFertilizer == "yes" || usedFertilizer == "no")
  ) {
    usedFertilizer = prompt(
      "That is not a valid answer. Please answer yes or no. Did you use fertilizer?"
    );
  }
  if (usedFertilizer == "no") {
    console.log("Without fertilizer you didn't get a boosted yield");
    console.log("Average Season's Bushel Yield: " + estimatedBushelYield);
    console.log(
      "Your Estimated Bushel Yield Accounting for Rainfall: " + bushelYield
    );
    console.log("Actual Bushel Yield: " + bushelYield);
  }
}

fertAsk();

function fertType() {
  qualityFertilizer = prompt("Did you use regular or premium fertilizer?");
  while (
    qualityFertilizer === null ||
    !(qualityFertilizer == "regular" || qualityFertilizer == "premium")
  ) {
    qualityFertilizer = prompt(
      "That is not a valid answer. Please answer regular or premium."
    );
  }
  if (qualityFertilizer == "regular") {
    finalYield = bushelYield * 1.1;
    console.log(
      "With regular fertilizer you had a 10% boost to your crop yield!"
    );
    console.log("Average Season's Bushel Yield: " + estimatedBushelYield);
    console.log(
      "Your Estimated Bushel Yield Accounting for Rainfall: " + bushelYield
    );
    console.log("Actual Bushel Yield: " + finalYield);
  } else if (qualityFertilizer == "premium") {
    finalYield = bushelYield * 1.15;
    console.log(
      "With premium fertilizer you had a 15% boost to your crop yield!"
    );
    console.log("Average Season's Bushel Yield: " + estimatedBushelYield);
    console.log(
      "Your Estimated Bushel Yield Accounting for Rainfall: " + bushelYield
    );
    console.log("Actual Bushel Yield: " + finalYield);
  } else {
    qualityFertilizer = prompt("Did you use regular or premium fertilizer?");
  }
}

if (usedFertilizer == "yes") {
  fertType();
}
