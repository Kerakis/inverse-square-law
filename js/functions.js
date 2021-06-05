let intensity1 = null;
let intensity2 = null;
let distance = null;

function inverseSquareLaw() {
  return Math.sqrt((intensity1 * (distance * distance)) / intensity2);
}

function clickMe() {
  intensity1 = document.getElementById("intensity1").value;
  intensity2 = document.getElementById("intensity2").value;
  distance = document.getElementById("distance").value;
  document.getElementById("button").onclick = inverseSquareLaw();
  document.getElementById(
    "answer"
  ).innerHTML = `The new distance is ${inverseSquareLaw().toFixed(2)}.`;
}
document.getElementById("button").addEventListener("click", clickMe);
