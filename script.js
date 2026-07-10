function solveProblem() {
  const problem = document.getElementById("problem").value;
  const answerBox = document.getElementById("answer");

  if (problem.trim() === "") {
    answerBox.innerHTML = "Please enter a math problem.";
    return;
  }

  try {
    const answer = eval(problem);

    answerBox.innerHTML = `
      <h3>Solution:</h3>
      <p>${problem} = ${answer}</p>
      <p>HeliosAI is ready for more advanced reasoning.</p>
    `;
  } catch (error) {
    answerBox.innerHTML = `
      <h3>HeliosAI:</h3>
      <p>I couldn't solve that yet.</p>
      <p>Try something like: 2+2 or 5*7</p>
    `;
  }
}
