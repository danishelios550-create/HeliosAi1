function solveProblem() {
  alert("HeliosAI connected!");

  let problem = document.getElementById("problem").value;

  document.getElementById("answer").innerHTML =
    "You entered: " + problem;
}
