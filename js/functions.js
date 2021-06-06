// Set global variables
let intensity1 = null;
let intensity2 = null;
let distance1 = null;
let distance2 = null;
const select = document.querySelector("#problemType");
const originalIntensityQuestion = document.querySelector(
  "#originalIntensityQuestion"
);
const originalDistanceQuestion = document.querySelector(
  "#originalDistanceQuestion"
);
const newIntensityQuestion = document.querySelector("#newIntensityQuestion");
const newDistanceQuestion = document.querySelector("#newDistanceQuestion");
const answer = document.querySelector("#answer");

// Function for solving the unknown distance using the inverse square law
function inverseSquareLawDistance() {
  return Math.sqrt((intensity1 * (distance1 * distance1)) / intensity2);
}

// Function for solving the unknown intensity using the inverse square law
function inverseSquareLawIntensity() {
  return (intensity1 * (distance1 * distance1)) / (distance2 * distance2);
}

// Collects user input and runs the distance problem-solving function
function clickMeDistance() {
  intensity1 = document.getElementById("intensity1").value;
  intensity2 = document.getElementById("intensity2").value;
  distance1 = document.getElementById("distance1").value;
  inverseSquareLawDistance();
  document.getElementById(
    "answer"
  ).innerHTML = `The new distance is ${inverseSquareLawDistance().toFixed(2)}.`;
}

// Collects user input and runs the intensity problem-solving function
function clickMeItensity() {
  intensity1 = document.getElementById("intensity1").value;
  distance1 = document.getElementById("distance1").value;
  distance2 = document.getElementById("distance2").value;
  inverseSquareLawIntensity();
  document.getElementById(
    "answer"
  ).innerHTML = `The new intensity is ${inverseSquareLawIntensity().toFixed(
    2
  )}.`;
}

// Choose whether the user is solving for distance or intensity
function problemType() {
  const choice = select.value;

  switch (choice) {
    case "distance": // Show the user questions related to solving for distance
      originalIntensityQuestion.textContent =
        "What is the original intensity of the beam?";
      originalDistanceQuestion.textContent =
        "What is the original source-to-image-receptor distance?";
      newIntensityQuestion.textContent =
        "What is the new intensity of the beam?";
      newDistanceQuestion.textContent = "";
      answer.textContent = "";
      document.getElementById("distance2").style.display = "none";
      document.getElementById("intensity2").style.display = "block";
      document
        .getElementById("button")
        .addEventListener("click", clickMeDistance);
      break;
    case "intensity": // Show the user questions related to solving for itensity
      originalIntensityQuestion.textContent =
        "What is the original intensity of the beam?";
      originalDistanceQuestion.textContent =
        "What is the original source-to-image-receptor distance?";
      newIntensityQuestion.textContent = "";
      newDistanceQuestion.textContent =
        "What is the new source-to-image-receptor distance?";
      answer.textContent = "";
      document.getElementById("intensity2").style.display = "none";
      document.getElementById("distance2").style.display = "block";
      document
        .getElementById("button")
        .addEventListener("click", clickMeItensity);
      break;
    default:
      // Require the user to choose which type of problem to solve
      answer.textContent = "You must choose what you are solving for.";
  }
}
select.addEventListener("change", problemType);
