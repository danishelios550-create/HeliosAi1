function solveProblem() {
  let problem = document.getElementById("problem").value;

  try {
    let answer = eval(problem);

    document.getElementById("answer").innerHTML =
      "Solution: " + answer;
  } catch (error) {
    document.getElementById("answer").innerHTML =
      "I couldn't solve that yet.";
  }
}
