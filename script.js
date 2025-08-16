// Respuestas correctas
const answers = {
  1: "Charlie Brown",
  2: "Woodstock",
  3: "Como piloto de avión en la Primera Guerra Mundial"
};

let score = 0;
let answered = 0;

function checkAnswer(question, answer) {
  const result = document.getElementById("result" + question);

  if (answer === answers[question]) {
    result.textContent = "✅ ¡Correcto!";
    result.className = "result correct";
    score++;
  } else {
    result.textContent = "❌ Incorrecto, intenta de nuevo.";
    result.className = "result incorrect";
  }

  answered++;

  if (answered === Object.keys(answers).length) {
    showFinalMessage();
  }
}

function showFinalMessage() {
  const final = document.getElementById("finalMessage");
  if (score === 3) {
    final.textContent = "🎉 ¡Eres un verdadero fan de Snoopy! 🐶";
  } else {
    final.textContent = `Obtuviste ${score}/3 respuestas correctas. ¡Sigue intentando!`;
  }
}
