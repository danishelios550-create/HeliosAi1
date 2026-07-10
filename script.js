function solveProblem() {
  const problem = document.getElementById("problem").value;
  const answer = document.getElementById("answer");

  if (problem.trim() === "") {
    answer.innerHTML = "Please enter a math problem first.";
    return;
  }

  answer.innerHTML = 
    "HeliosAI received: " + problem + "<br><br>" +
    "Solution engine coming online...";
}
