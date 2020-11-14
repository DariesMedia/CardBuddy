// Facebook SDK
FBInstant.initializeAsync()
  .then(function() {
    
  // Start loading game assets here
    var progress = 0;
    var interval = setInterval(function(){
    // Informs the SDK of loading progress
      FBInstant.setLoadingProgress(progress);
      progress += 10;
      if (progress >= 95) {
        clearInterval(interval);
        FBInstant.startGameAsync()
          .then(function() {
            console.log("Card Buddy Game Has Started. Have Fun!");
            var playerName = FBInstant.player.getName();
            var player = document.getElementById("player");
            player.innerText = "Hi " + playerName;
        });
      }
    }, 100);
  });
  
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
