function solveProblem() {
  let problem = document.getElementById("problem").value;

  let answer;

  try {
    answer = eval(problem);
  } catch (error) {
    answer = "I couldn't solve that yet.";
  }

  document.getElementById("answer").innerHTML = "Answer: " + answer;
}
