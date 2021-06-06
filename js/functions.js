// Set global variables
let distance1A = null;
let distance1B = null;
let distance2 = null;
let intensity1A = null;
let intensity1B = null;
let intensity2 = null;

// Solve the unknown distance using the inverse square law
function inverseSquareLawDistance() {
  return Math.sqrt((intensity1A * (distance1A * distance1A)) / intensity2);
}

// Solve the unknown intensity using the inverse square law
function inverseSquareLawIntensity() {
  return (intensity1B * (distance1B * distance1B)) / (distance2 * distance2);
}

// Collect user input and run the distance problem-solving function
function clickMeDistance() {
  intensity1A = document.getElementById("intensity1A").value;
  intensity2 = document.getElementById("intensity2A").value;
  distance1A = document.getElementById("distance1A").value;
  inverseSquareLawDistance();
  document.getElementById(
    "answerA"
  ).innerHTML = `The new distance is ${inverseSquareLawDistance().toFixed(2)}.`;
}

// Collect user input and run the intensity problem-solving function
function clickMeIntensity() {
  intensity1B = document.getElementById("intensity1B").value;
  distance1B = document.getElementById("distance1B").value;
  distance2 = document.getElementById("distance2B").value;
  inverseSquareLawIntensity();
  document.getElementById(
    "answerB"
  ).innerHTML = `The new intensity is ${inverseSquareLawIntensity().toFixed(
    2
  )}.`;
}

// Show inputs for solving distance and hide inputs for solving intensity
function showDistance() {
  document.getElementById("distanceInputs").style.display = "block";
  document.getElementById("intensityInputs").style.display = "none";
}

// Show inputs for solving intensity and hide inputs for solving distance
function showIntensity() {
  document.getElementById("intensityInputs").style.display = "block";
  document.getElementById("distanceInputs").style.display = "none";
}

// Clear values from distance inputs
function clearDistanceValues() {
  document.getElementById("intensity1A").value = "";
  document.getElementById("distance1A").value = "";
  document.getElementById("intensity2A").value = "";
}

// Clear values from intensity inputs
function clearIntensityValues() {
  document.getElementById("intensity1B").value = "";
  document.getElementById("distance1B").value = "";
  document.getElementById("distance2B").value = "";
}

// Add on click event listeners to the appropriate buttons
document
  .getElementById("distanceButton")
  .addEventListener("click", clickMeDistance);
document
  .getElementById("intensityButton")
  .addEventListener("click", clickMeIntensity);
document
  .getElementById("showDistanceButton")
  .addEventListener("click", showDistance);
document
  .getElementById("showIntensityButton")
  .addEventListener("click", showIntensity);
document
  .getElementById("clearDistanceValues")
  .addEventListener("click", clearDistanceValues);
document
  .getElementById("clearIntensityValues")
  .addEventListener("click", clearIntensityValues);
