// Set global variables
let distance1A = null;
let distance1B = null;
let distance2 = null;
let mas1A = null;
let mas1B = null;
let mas2 = null;

// Solve the unknown distance using the mAs-distance formula
function mAsDistanceDistance() {
  return Math.sqrt((mas2 * (distance1A * distance1A)) / mas1A);
}

// Solve the unknown mAs using the mAs-distance formula
function mAsDistancemAs() {
  return (mas1B * (distance2 * distance2)) / (distance1B * distance1B);
}

// Collect user input and run the distance problem-solving function
function clickMeDistance() {
  mas1A = document.getElementById("mas1A").value;
  mas2 = document.getElementById("mas2A").value;
  distance1A = document.getElementById("distance1A").value;
  const answer = parseFloat(mAsDistanceDistance().toFixed(2));
  const leadIn = `The new distance is: `;
  const errorNumbersOnly = `Please only enter numbers.`;
  const errorBlank = `Please enter data into each input field.`;
  document.getElementById("answerDistance").style.visibility = "visible";
  document.getElementById("distanceLeadIn").style.visibility = "visible";
  if (mas1A === "" || mas2 === "" || distance1A === "") {
    document.getElementById("distanceLeadIn").innerHTML = `${errorBlank}`;
    document.getElementById("answerDistance").innerHTML = ``;
  } else if (
    Number.isNaN(mas1A) ||
    Number.isNaN(mas2) ||
    Number.isNaN(distance1A)
  ) {
    document.getElementById("distanceLeadIn").innerHTML = `${errorNumbersOnly}`;
    document.getElementById("answerDistance").innerHTML = ``;
  } else {
    document.getElementById("distanceLeadIn").innerHTML = `${leadIn}`;
    document.getElementById("answerDistance").innerHTML = `${answer}`;
  }
}

// Collect user input and run the mAs problem-solving function
function clickMemAs() {
  mas1B = document.getElementById("mas1B").value;
  distance1B = document.getElementById("distance1B").value;
  distance2 = document.getElementById("distance2B").value;
  const answer = parseFloat(mAsDistancemAs().toFixed(2));
  const leadIn = `The new mAs is: `;
  const errorNumbersOnly = `Please only enter numbers.`;
  const errorBlank = `Please enter data into each input field.`;
  document.getElementById("answermAs").style.visibility = "visible";
  document.getElementById("masLeadIn").style.visibility = "visible";
  if (mas1B === "" || distance1B === "" || distance2 === "") {
    document.getElementById("masLeadIn").innerHTML = `${errorBlank}`;
    document.getElementById("answermAs").innerHTML = ``;
  } else if (
    Number.isNaN(mas1B) ||
    Number.isNaN(distance1B) ||
    Number.isNaN(distance2)
  ) {
    document.getElementById("masLeadIn").innerHTML = `${errorNumbersOnly}`;
    document.getElementById("answermAs").innerHTML = ``;
  } else {
    document.getElementById("masLeadIn").innerHTML = `${leadIn}`;
    document.getElementById("answermAs").innerHTML = `${answer}`;
  }
}

// Show inputs for solving distance and hide inputs for solving mAs
function showDistance() {
  document.getElementById("distanceInputs").style.display = "block";
  document.getElementById("masInputs").style.display = "none";
  document.getElementById("mas1A").focus();
}

// Show inputs for solving mAs and hide inputs for solving distance
function showmAs() {
  document.getElementById("masInputs").style.display = "block";
  document.getElementById("distanceInputs").style.display = "none";
}

// Clear values from distance inputs
function clearDistanceValues() {
  document.getElementById("mas1A").value = "";
  document.getElementById("distance1A").value = "";
  document.getElementById("mas2A").value = "";
  document.getElementById("answerDistance").style.visibility = "hidden";
  document.getElementById("distanceLeadIn").style.visibility = "hidden";
}

// Clear values from mAs inputs
function clearmAsValues() {
  document.getElementById("mas1B").value = "";
  document.getElementById("distance1B").value = "";
  document.getElementById("distance2B").value = "";
  document.getElementById("answermAs").style.visibility = "hidden";
  document.getElementById("masLeadIn").style.visibility = "hidden";
}

// Restricts input for the given textbox to the given inputFilter.
function setInputFilter(textbox, inputFilter) {
  [
    "input",
    "keydown",
    "keyup",
    "mousedown",
    "mouseup",
    "select",
    "contextmenu",
    "drop"
  ].forEach((event) => {
    textbox.addEventListener(event, function noNumbers() {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (Object.prototype.hasOwnProperty.call(this, "oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        this.value = "";
      }
    });
  });
}

// Add click event listeners to the appropriate buttons
document
  .getElementById("distanceButton")
  .addEventListener("click", clickMeDistance);
document.getElementById("mAsButton").addEventListener("click", clickMemAs);
document
  .getElementById("showDistanceButton")
  .addEventListener("click", showDistance);
document.getElementById("showmAsButton").addEventListener("click", showmAs);
document
  .getElementById("clearDistanceValues")
  .addEventListener("click", clearDistanceValues);
document
  .getElementById("clearmAsValues")
  .addEventListener("click", clearmAsValues);

// Restricts non-numberical input into the textboxes
const mAsInputChecker = document.querySelectorAll(".masFields");
for (let i = 0; i < mAsInputChecker.length; i += 1) {
  setInputFilter(mAsInputChecker[i], (value) => /^-?\d*[.,]?\d*$/.test(value));
}

const distanceInputChecker = document.querySelectorAll(".distanceFields");
for (let i = 0; i < distanceInputChecker.length; i += 1) {
  setInputFilter(distanceInputChecker[i], (value) =>
    /^-?\d*[.,]?\d*$/.test(value)
  );
}

// Add keypress event listeners to the input fields
const distanceInputFields = document.querySelectorAll(".distanceFields");
for (let i = 0; i < distanceInputFields.length; i += 1) {
  distanceInputFields[i].addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      clickMeDistance();
    }
  });
}

const mAsInputFields = document.querySelectorAll(".masFields");
for (let i = 0; i < mAsInputFields.length; i += 1) {
  mAsInputFields[i].addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      clickMemAs();
    }
  });
}

// Show values for the slider element
const slider = document.getElementById("myRange");
const sid = document.getElementById("sliderDistanceText");
const mAs = document.getElementById("sliderDoseText");
sid.innerHTML = slider.value;
mAs.innerHTML = "20";

slider.oninput = function SID() {
  sid.innerHTML = this.value;
  const newmAs = parseFloat(
    ((20 * (this.value * this.value)) / (72 * 72)).toFixed(3)
  );
  mAs.innerHTML = `${newmAs}`;
};
