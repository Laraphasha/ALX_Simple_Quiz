function checkAnswer() {
  let correctAnswer = 4;

  let selectedRadio = document.querySelector('input[name="quiz"]:checked');

  if (selectedRadio) {
    let userAnswer = parseInt(selectedRadio.value, 10);
    
    if (userAnswer === correctAnswer) {
      document.getElementById('feedback').innerHTML = "Correct! Well done."
    } else {
      document.getElementById('feedback').innerHTML = "That's incorrect. Try again!"
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let checkButton = document.getElementById("submit-answer");
  if (checkButton) {
    checkButton.addEventListener("click", checkAnswer);
  }
});