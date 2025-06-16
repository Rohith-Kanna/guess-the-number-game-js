var guess = document.getElementById("guess");
var result = document.getElementById("res");
var random = document.getElementById("rand");
var score = document.getElementById("score");
var r = Math.floor(Math.random() * 10) + 1;
var s = 10;
console.log(r);

function check() {
  random.textContent = "Random No Genrated :" + r;
  if (Number(guess.value) == r) {
    result.textContent = "You Guessed Correct";
    alert("GUESSED CORRECT");
  } else {
    result.textContent = "You Guessed Wrong";
    s -= 1;
    score.textContent = "Score : " + s;
    r = Math.floor(Math.random() * 10) + 1;
    if (s <= 0) {
      result.textContent = "Game Over";
      alert("Game Over! Reload to play again.");
    }
  }
}
function reset() {
  s = 10;

  r = Math.floor(Math.random() * 10) + 1;
  score.textContent = "Score : " + s;
  random.textContent = "Random";
  result.textContent = "You are Right/Wrong";
}
