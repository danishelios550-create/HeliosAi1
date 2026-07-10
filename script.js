
const button = document.getElementById("solveButton");
const input = document.getElementById("problemInput");
const output = document.getElementById("output");

button.addEventListener("click", function () {
  const problem = input.value.trim();

  if (problem === "") {
    output.innerHTML = "Please enter a math problem.";
    return;
  }

  let answer;

  try {
    // Basic calculator engine
    answer = eval(problem);

    output.innerHTML = `
      <h3>Solution:</h3>
      <p>${problem} = ${answer}</p>
      <p>HeliosAI is calculating step-by-step explanations next.</p>
    `;
  } catch (error) {
    output.innerHTML = `
      <h3>HeliosAI:</h3>
      <p>I couldn't solve that yet. Try a simpler expression like:</p>
      <p>2+2 or 5*7</p>
    `;
  }
});
