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
}
// Home Function on index.html
const cardClick = () => {
  introImage.style.display = "block";
  helpGame.style.display = "none";
}
