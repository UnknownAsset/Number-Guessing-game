var selectedDiff = document.getElementById("diff");
var submitClick = document.getElementById("click");
var div1 = document.getElementById("lockIn");
var div2 = document.getElementById("game");
var guess = document.getElementById("userGuess");
var attempts = 0;
var attempted =0 ;
var maxNum = 0;
var numRando = 0;

function startFunc() {
  selectedDiff.style.display = "none";
  div1.style.display = "none";
  div2.style.display = "";
  DefineDiff();
  numRando = getRandomInt(0, maxNum);
  div2.children[6].innerHTML = `You have ${attempts} attempts left`

}
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}
function DefineDiff() {
    if (selectedDiff.value == "easy") {
      attempts = 6;
      maxNum = 64;
      div2.children[1].innerHTML = "You've selected Easy difficulty!"
      div2.children[2].innerHTML = "You will guess a number between 0 and 64, and you'll have 6 attempts"

    } else if (selectedDiff.value == "normal") {
      attempts = 7;
      maxNum = 128;
      div2.children[1].innerHTML = "You've selected Normal difficulty!"
      div2.children[2].innerHTML = "You will guess a number between 0 and 128, and you'll have 7 attempts"

    } else if (selectedDiff.value == "hard") {
      attempts = 8;
      maxNum = 256;
      div2.children[1].innerHTML = "You've selected the Hard difficulty!"
      div2.children[2].innerHTML = "You will guess a number between 0 and 256, and you'll have 8 attempts"
    }
  }

function GuessFunc()
{
  if(attempted>=attempts)
  {
    alert(`You're are a loser, the number I was thinking was ${numRando}`);
   return false;
  }
  attempted++;
  var attemptsLeft = attempts-attempted 
  div2.children[6].innerHTML = `You have ${attemptsLeft} attempts left`
  // alert(guess.value)
  if (guess.value < numRando)
  {
    alert("Your guess was too low, try guessing higher")
  }
  else if (guess.value > numRando)
  {
    alert("Your guess was too high, try guessing lower")
  }
  else if (guess.value == numRando)
  {
    alert("Your guess was correct, congratulations!");
    return true;
  }
}



