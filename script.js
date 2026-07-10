function solveProblem() {
  const problem = document.getElementById("problem").value;
  const answer = document.getElementById("answer");

  if (problem.trim() === "") {
    answer.innerHTML = "Please enter a math problem first.";
    return;
  }

  try {
    const result = eval(problem);

    answer.innerHTML =
      "HeliosAI solved:<br><br>" +
      problem +
      " = " +
      result;
  } catch {
    answer.innerHTML =
      "HeliosAI is still learning this type of problem.";
  }
}
