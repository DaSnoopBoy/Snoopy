// Respuestas correctas
const answers = {
  1: "Charlie Brown",
  2: "Woodstock",
  3: "Como piloto de avión en la Primera Guerra Mundial",
  4: "Snoopy",
  5: "Beagle",
  6: "Woodstock",
  7: "Escribir",
  8: "Spike",
  9: "Lucy",
  10: "Béisbol"
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
  if (score === 10) {
    final.innerHTML = "🎉 ¡Eres un verdadero fan de Snoopy! 🐶 <img src='https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3MxMW43MnZncmJpYzNvbzFhcTdkOTlmaHp3dWNodnhlZHMzZWx6eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ohzdScjhzs4WnJ0Os/giphy.gif' alt='Snoopy' />";
  } else {
    final.innerHTML = `Obtuviste ${score}/10 respuestas correctas. ¡Sigue intentando! <img src='https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExczhhOXRzMW84ZDA5MnhsNWtmc2gxcHp6YjVjZnZ2eDQ1OXo3djFndCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/URbV2h1nOH2X6/giphy.gif' alt='Snoopy' />`;
  }
}
