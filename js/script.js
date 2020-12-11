let rainInches = null;
let bushelYield = null;
let estimatedBushelYield = 50;
let usedFertilizer = null;
let qualityFertilizer = null;
function isNumber(value) {
  const numberPattern = /^[0-9]+$/;
  return numberPattern.test(value);
}
rainInches = prompt("How much rain fell in inches? (Please use digits)");
while (rainInches === null || !isNumber(rainInches)) {
  rainInches = prompt(
    "That is not a valid number. Please enter the amount of rain fall in inches."
  );
}
s = "*".repeat(rainInches);
console.log(s);

if (rainInches >= 20) {
  bushelYield = estimatedBushelYield * 0.9;
  console.log(bushelYield);
} else if (rainInches <= 10) {
  bushelYield = estimatedBushelYield * 0.8;
  console.log(bushelYield);
} else {
  bushelYield = 50;
  console.log(bushelYield);
}
while (bushelYield != null) {
  usedFertilizer = prompt("Did you use fertilizer? (Yes/No)");
}
while (
  usedFertilizer === "yes" ||
  usedFertilizer === "Yes" ||
  usedFertilizer === "YES"
) {
  qualityFertilizer = prompt("did you use regular or premium fertilizer?");
}
while (
  usedFertilizer === "no" ||
  usedFertilizer === "No" ||
  usedFertilzier === "NO"
) {
  console.log("Without fertilizer you didn't get a boosted yield");
  console.log("Estimated Bushel Yield:" + estimatedBushelYield);
  console.log("Actual Bushel Yield:" + bushelYield);
}
while (
  qualityFertilizer === "regular" ||
  qualityFertilizer === "Regular" ||
  qualityFertilizer === "REGULAR"
) {
  bushelYield = bushelYield * 1.1;
  console.log(
    "With regular fertilizer you had a 10% boost to your crop yield!"
  );
  console.log("Estimated Bushel Yield:" + estimatedBushelYield);
  console.log("Actual Bushel Yield:" + bushelYield);
}
while (
  qualityFertilizer === "premium" ||
  qualityFertilizer === "Premium" ||
  qualityFertilizer === "PREMIUM"
) {
  bushelYield = bushelYield * 1.15;
  console.log(
    "With premium fertilizer you had a 15% boost to your crop yield!"
  );
  console.log("Estimated Bushel Yield:" + estimatedBushelYield);
  console.log("Actual Bushel Yield:" + bushelYield);
}
