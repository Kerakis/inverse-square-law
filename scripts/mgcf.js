// Set global variables
let gcf1A = null;
let gcf1B = null;
let gcf2 = null;
let mas1A = null;
let mas1B = null;
let mas2 = null;

// Solve the unknown GCF using the mAs-GCF formula
function mAsGCFGCF() {
  return (mas2 * gcf1A) / mas1A;
}

// Solve the unknown mAs using the mAs-GCF formula
function mAsGCFmAs() {
  return (mas1B * gcf2) / gcf1B;
}

// Collect user input and run the GCF problem-solving function
function clickMeGCF() {
  mas1A = document.getElementById("mas1A").value;
  mas2 = document.getElementById("mas2A").value;
  gcf1A = document.getElementById("GCF1A").value;
  const answer = parseFloat(mAsGCFGCF().toFixed(2));
  const leadIn = `The new GCF is: `;
  const errorNumbersOnly = `Please only enter numbers.`;
  const errorBlank = `Please enter data into each input field.`;
  document.getElementById("answerGCF").style.visibility = "visible";
  document.getElementById("GCFLeadIn").style.visibility = "visible";
  if (mas1A === "" || mas2 === "" || gcf1A === "") {
    document.getElementById("GCFLeadIn").innerHTML = `${errorBlank}`;
    document.getElementById("answerGCF").innerHTML = ``;
  } else if (Number.isNaN(mas1A) || Number.isNaN(mas2) || Number.isNaN(gcf1A)) {
    document.getElementById("GCFLeadIn").innerHTML = `${errorNumbersOnly}`;
    document.getElementById("answerGCF").innerHTML = ``;
  } else {
    document.getElementById("GCFLeadIn").innerHTML = `${leadIn}`;
    document.getElementById("answerGCF").innerHTML = `${answer}`;
  }
}

// Collect user input and run the mAs problem-solving function
function clickMemAs() {
  mas1B = document.getElementById("mas1B").value;
  gcf1B = document.getElementById("GCF1B").value;
  gcf2 = document.getElementById("GCF2B").value;
  const answer = parseFloat(mAsGCFmAs().toFixed(2));
  const leadIn = `The new mAs is: `;
  const errorNumbersOnly = `Please only enter numbers.`;
  const errorBlank = `Please enter data into each input field.`;
  document.getElementById("answermAs").style.visibility = "visible";
  document.getElementById("masLeadIn").style.visibility = "visible";
  if (mas1B === "" || gcf1B === "" || gcf2 === "") {
    document.getElementById("masLeadIn").innerHTML = `${errorBlank}`;
    document.getElementById("answermAs").innerHTML = ``;
  } else if (Number.isNaN(mas1B) || Number.isNaN(gcf1B) || Number.isNaN(gcf2)) {
    document.getElementById("masLeadIn").innerHTML = `${errorNumbersOnly}`;
    document.getElementById("answermAs").innerHTML = ``;
  } else {
    document.getElementById("masLeadIn").innerHTML = `${leadIn}`;
    document.getElementById("answermAs").innerHTML = `${answer}`;
  }
}

// Show inputs for solving GCF and hide inputs for solving mAs
function showGCF() {
  document.getElementById("GCFInputs").style.display = "block";
  document.getElementById("masInputs").style.display = "none";
  document.getElementById("mas1A").focus();
}

// Show inputs for solving mAs and hide inputs for solving GCF
function showmAs() {
  document.getElementById("masInputs").style.display = "block";
  document.getElementById("GCFInputs").style.display = "none";
  document.getElementById("mas1B").focus();
}

// Clear values from GCF inputs
function clearGCFValues() {
  document.getElementById("mas1A").value = "";
  document.getElementById("GCF1A").value = "";
  document.getElementById("mas2A").value = "";
  document.getElementById("answerGCF").style.visibility = "hidden";
  document.getElementById("GCFLeadIn").style.visibility = "hidden";
}

// Clear values from mAs inputs
function clearmAsValues() {
  document.getElementById("mas1B").value = "";
  document.getElementById("GCF1B").value = "";
  document.getElementById("GCF2B").value = "";
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
document.getElementById("GCFButton").addEventListener("click", clickMeGCF);
document.getElementById("mAsButton").addEventListener("click", clickMemAs);
document.getElementById("showGCFButton").addEventListener("click", showGCF);
document.getElementById("showmAsButton").addEventListener("click", showmAs);
document
  .getElementById("clearGCFValues")
  .addEventListener("click", clearGCFValues);
document
  .getElementById("clearmAsValues")
  .addEventListener("click", clearmAsValues);

// Restricts non-numberical input into the textboxes
const mAsInputChecker = document.querySelectorAll(".masFields");
for (let i = 0; i < mAsInputChecker.length; i += 1) {
  setInputFilter(mAsInputChecker[i], (value) => /^-?\d*[.,]?\d*$/.test(value));
}

const gcfInputChecker = document.querySelectorAll(".GCFFields");
for (let i = 0; i < gcfInputChecker.length; i += 1) {
  setInputFilter(gcfInputChecker[i], (value) => /^-?\d*[.,]?\d*$/.test(value));
}

// Add keypress event listeners to the input fields
const gcfInputFields = document.querySelectorAll(".GCFFields");
for (let i = 0; i < gcfInputFields.length; i += 1) {
  gcfInputFields[i].addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      clickMeGCF();
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

document
  .getElementById("year")
  .appendChild(document.createTextNode(new Date().getFullYear()));
