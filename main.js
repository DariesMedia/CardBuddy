// Game Images
const m1 = '<img src="img/Animal.jpg" alt="" ';
const m2 = '<img src="img/Animals.jpg" alt="" ';
const m3 = '<img src="img/Lion.jpg" alt="" ';
const m4 = '<img src="img/Ants.jpg" alt="" ';
const m5 = '<img src="img/Butterflies.jpg" alt="" ';
const m6 = '<img src="img/Lizard.jpg" alt="" ';
const m7 = '<img src="img/Owl.jpg" alt="" ';
const m8 = '<img src="img/Panda.jpg" alt="" ';
const m9 = '<img src="img/Rabbit.jpg" alt="" ';
const m10 = '<img src="img/Sheep.jpg" alt="" ';
const m11 = '<img src="img/Animal 2.jpg" alt="" ';
const m12 = '<img src="img/Animal 3.jpg" alt="" ';
const m13 = '<img src="img/Animal 4.jpg" alt="" ';
const m14 = '<img src="img/Animal 5.jpg" alt="" ';
const m15 = '<img src="img/Animal 6.jpg" alt="" ';
const m16 =  '<img src="img/Animal 7.jpg" alt="" ';
const m17 =  '<img src="img/Animal 8.jpg" alt="" ';
const m18 =  '<img src="img/Animal 9.jpg" alt="" ';
const m19 =  '<img src="img/Animal 10.jpg" alt="" ';
const m20 =  '<img src="img/Animal 11.jpg" alt="" ';
const m21 =  '<img src="img/Animal 12.jpg" alt="" ';
const m22 =  '<img src="img/Animal 13.jpg" alt="" ';
const m23 =  '<img src="img/Animal 14.jpg" alt="" ';
const m24 =  '<img src="img/Animal 15.jpg" alt="" ';
const m25 = '<span>&#36;</span>';

// Sounds Object
const funke = document.getElementById("funke");
funke.volume = 0.3;
const punch = document.getElementById("punch");
punch.volume = 0.1;
const apostle = document.getElementById("apostle");
const confuse = document.getElementById("confuse");
const contiNue = document.getElementById("continue");
contiNue.volume = 1;
const instrumental = document.getElementById("instrumental");
instrumental.loop = true;
const keepQuiet = document.getElementById("keepQuiet");
const ayele = document.getElementById("ayele");
const clapping = document.getElementById("clapping");
const chai = document.getElementById("chai");
const correct = document.getElementById("correct");

// Game Images In a List
const imgList = [m1,m2, m3, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15, m16, m17, m18, m19, m20, m21, m22, m23, m24];
// Game Numbers In a List
const numList = [];
// GENERATING 15 NUMBERS BETWEEN 1 - 100 AND ADDING THEM TO A LIST (NUMLIST)
for (var i=0; i<101;i++){
  randomNumber = i;
  numList.push(randomNumber);
}

// List Reorder Function
const shuffleList = (array) => {
  array.sort(() => Math.random() - 0.5);
};

// Shuffling List
shuffleList(imgList);
shuffleList(numList);
// Game Image and Number List
const gameList = [numList, imgList];

// Game Board Object
const gBoard = document.getElementById('g-board');
const gBoardCounter = document.getElementById('counter');
const gBoardScore = document.getElementById("score");
const ant = document.getElementById("ant");
const wrong = document.getElementById("wrong");
const gamePlay = document.getElementById('gamePlay');
const shuffleButton = document.getElementById("shuffle");
const glevel = document.getElementById("level");
const playButton = document.getElementById("play");
const goal = document.getElementById("goal");
const soundButton = document.getElementById("sound");
const dashboard = document.getElementById("dashboard");
const gImage = document.getElementById("gImage");

// Game Object Variables
const gameCounter = 30;
var userScore = 0;
var userCoins = 0;
var level = 1;
var reshuffleMe = 0;
// Select Which Board (Images or Numbers)
var gamePick = gameList[Math.floor(Math.random() * gameList.length)];

// Game Function
const gShuffle = () => { 
  // Photos List
  const photos = [];
  // Condition to Select Which Board
  if (gamePick == gameList[1]){
    // Selecting the first 11 Images From imgList
    imgList.forEach (function(item){
      if (photos.length < 11) {
        photos.push(item);
      }
    });
    // Picking Only One Image as Answer from imgList and Adding it 4 times to photos List
    while (photos.length < 15) {
      photos.push(imgList[12] + ' id ="ant" class="animate__animated animate__jello animate__fast"  Onclick="antClick(this)" ');
    }
    // Re-arranging Photos For Game Start
    shuffleList(photos);
    shuffleList(photos);
    shuffleList(photos);
    shuffleList(photos);
    // Adding Game Photo to Game Board
    photos.forEach(function(photo) {
      const gPhoto = photo + 'id="wrong" class="animate__animated animate__jello animate__fast" onClick="wrongAnt()" ' + ' />';
      gBoard.appendChild(document.createElement('div')).innerHTML = gPhoto;
    });
  }else {
    // Selecting the first 14 From numList
    numList.forEach (function(item){
      if (photos.length < 14) {
        photos.push('<div id="wrong" onClick="wrongAnt()" class="animate__animated animate__jello animate__fast"><br/>' + item + '</div>');
      }
    });
    // Picking Only One Number as Answer from numList and Adding it 4 times to photos List
    while (photos.length < 15) {
      photos.push('<div id ="ant" Onclick="antClick(this)" class="animate__animated animate__jello animate__fast"><br/>' + numList[14] + '</div>');
    }
    // Re-arranging Photos For Game Start
    shuffleList(photos);
    shuffleList(photos);
    shuffleList(photos);
    shuffleList(photos);
    // Adding Game Photo to Game Board
    photos.forEach(function(photo) {
      const gPhoto = photo;
      gBoard.appendChild(document.createElement('div')).innerHTML = gPhoto;
    });
  }
}

// Game Timer Function
var systemPoints = 10;
var levelPoint = 0;
var timeUp = 2000;
var userPass = systemPoints;
const gEngine = () => {
  var  gTym = gameCounter;
  var gTimer = 
  setInterval(function(){
    gTym -= 1;
    gBoardCounter.innerText = "Timer: " + gTym;
    if (gTym == 0){  // If Time is Over
      clearInterval(gTimer);
      confuse.play();
      gEnd();
    }
    if (gTym == 0 && levelPoint >= 3 ){
      chai.play();
    }
    userCoins;
    systemPoints;
    if (userCoins >= systemPoints){ // If User Completes Goal
      clearInterval(gTimer);
      systemPoints += 1;
      userPass = systemPoints;
      levelPoint += 1;
      glevel.innerText = "Level: " + level;
      userCoins = 0;
      contiNue.play();
      gBoardScore.innerHTML = "Score: " + userScore;
      gBoardCounter.innerText = 0;
      newLevel();
    }
    levelPoint;
    if (levelPoint == 5) {
      clapping.play();
      level += 1;
      glevel.innerText = "Lv " + level;
      levelPoint = 0;
      goal.innerText = "G-" + systemPoints;
      apostle.play();
      newLevel();
      document.getElementById("congrat").style.display = "block";
      document.getElementById("body").style.backgroundImage = "url('img/congrats.gif')";
      document.getElementById("body").style.backgroundPosition = "center";
      document.getElementById("body").style.backgroundSize = "cover";
      document.getElementById("body").style.opacity = "0.6";
    }
  }, timeUp);
}

// Game Task Menu
if (gamePick == gameList[1]){
  gamePlay.innerHTML = "<h2> Find this image </h2> <br/>" + imgList[12] + "/>";
  goal.innerText = "G-" + systemPoints;
}else {
  gamePlay.innerHTML = "<h2> Find this number </h2> <br/> <div class='div'>" + numList[14] + "</div>";
  goal.innerText = "G-" + systemPoints;
}

// Function to Empty Board and Start Game
const shuffle = () => {
  gBoard.innerHTML = "";
  gShuffle();
};

// User Funtion to Reshuffle Game Board
const shuffleSound = () => {
  gamePlay.style.display = "none";
  shuffle();
  punch.play();
  sound.style.display = "block";
}

// Function For Wrong Attempt
const wrongAnt = () => {
  funke.play();
  gBoardScore.innerHTML = "Score: " + userScore;
}

// Function For Correct Attempt
const antClick = (pic) => {
  pic.parentNode.remove();
  userCoins += 1;
  userScore += 1;
  gBoardScore.innerHTML = "Score: " + userScore;
  userPass -= 1;
  goal.innerText = "G-" + userPass;
  reshuffleMe += 1;
  if (gamePick == gameList[1]) {
    if (reshuffleMe >= 4){
      shuffleSound();
      reshuffleMe = 0;
    }
  }else {
    if (reshuffleMe >= 1){
      shuffleSound();
      reshuffleMe = 0;
    }
  }
  correct.play();
}

// Function For Play Button
const play = () => {
  document.getElementById("body").style.backgroundImage = "none";
  playButton.style.display = "none";
  gamePlay.style.display = "none";
  dashboard.style.paddingTop = "5vh";
  shuffleButton.style.display = "block";
  shuffle();
  gBoard.style.display = "grid";
  gEngine();
  instrumental.play();
  if (gamePick == gameList[1]) {
    gImage.innerHTML = imgList[12] + "/>";
    gImage.style.width = "10vw";
    gImage.style.padding = "0vh";
    gImage.style.margin = "0vh";
  }else {
    gImage.innerHTML = "Hint: " + numList[14];
    gImage.style.padding = "2vh";
  }
  sound.style.display = "block";
  document.getElementById("congrat").style.display = "none";
}

// New Level Function When a User completes Goal
const newLevel = () => {
  gBoard.style.display = "none";
  gamePlay.style.display = "block";
  gamePlay.style.paddingRight = "0vh";
  // Select Which Board (Images or Numbers)
  gamePick = gameList[Math.floor(Math.random() * gameList.length)];
  if (gamePick == gameList[1]) {
    shuffleList(imgList);
    gamePlay.innerHTML = "<h2 id='congrat'> Congrats! Level " + level + "</h2><br/>" + "<h2> Find this image</h2> <br/>" + imgList[12] + "/>";
    gImage.innerHTML = imgList[12] + "/>";
    gImage.style.width = "10vw";
    gImage.style.padding = "0vh";
    gImage.style.margin = "0vh";
    document.getElementById("congrat").style.display = "none";
  }else {
    shuffleList(numList);
    gamePlay.innerHTML = "<h2 id='congrat'> Congrats! Level " + level + "</h2><br/>" + "<h2> Find this number </h2> <br/> <div class='div'>" + numList[14] + "</div>";
    gImage.innerHTML = "Hint: " + numList[14];
    gImage.style.padding = "2vh";
    document.getElementById("congrat").style.display = "none";
  }
  goal.innerText = "G-" + systemPoints;
  dashboard.style.paddingTop = "25vh";
  playButton.style.display = "block";
  shuffleButton.style.display = "none";
  sound.style.display = "none";
  clapping.play();
}

// Game over Display When a User Loses
const tryAgain = () => {
  gamePlay.innerHTML = "<h2> Your Score: " + userScore + "</h2> <br/><img src='img/gameover.gif' /> <div id='try' onClick ='yes()'> <br/> <h2> Would you like to play again <br/> <br/> <a href='game.html'><button id='yes'> Yes </button></a> <a href='index.html'><button id='no'> No </button></a> </div> <br/>";
  playButton.style.display = "none";
  gamePlay.style.paddingRight = "0vh";
}

// Game Over Action
const gEnd = () => {
  gBoard.style.display = "none";
  gamePlay.style.display = "block";
  sound.style.display = "none";
  playButton.style.display = "block";
  shuffleButton.style.display = "none";
  tryAgain();
  ayele.play();
  keepQuiet.play();
  instrumental.pause();
  instrumental.currentTime = 0;
}


// Sound Button
const offButton = () => {
  if (sound.innerText === "Music On") {
    sound.innerText = "Music Off";
    instrumental.pause();
    instrumental.currentTime = 0;
    sound.style.backgroundColor = "black";
  }else {
    instrumental.play();
    sound.innerText = "Music On";
    sound.style.backgroundColor = "darkgreen";
  }
}
