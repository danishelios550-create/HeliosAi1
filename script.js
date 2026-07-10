
function solveProblem() {
  document.getElementById("answer").innerHTML = "Button works! Reading input...";

  let problem = document.getElementById("problem").value;

  document.getElementById("answer").innerHTML =
    "You typed: " + problem;
}
