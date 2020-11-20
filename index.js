// Index.html Script
var introImage = document.getElementById("introImage");
var helpGame = document.getElementById("helpGame");
helpGame.style.display = "none";
helpGame.style.padding = "4vh";
helpGame.style.paddingTop = "12vh";
helpGame.style.color= "white";
// Help Function on index.html
const helpClick = () => {
  introImage.style.display = "none";
  helpGame.style.display = "block";
  helpGame.innerText = "Find and click on a random image/number within a certain time frame to pass stages/levels. <br/> At the top of the game you will find the "Timer", "G-0" (total clicks to be made) and "Hints" (for assistance/reminder of what to click)."
}
// Home Function on index.html
const cardClick = () => {
  introImage.style.display = "block";
  helpGame.style.display = "none";
}
