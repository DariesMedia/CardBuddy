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
const m25 = '<img src="img/coin.png" alt="" class="coinsImg">';

// Sounds Object
const funke = document.getElementById("funke");
funke.volume = 0.2;
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

// Game Images In a List
const imgList = [m1,m2, m3, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15, m16, m17, m18, m19, m20, m21, m22, m23, m24];

// List Reorder Function
const shuffleList = (array) => {
  array.sort(() => Math.random() - 0.5);
};

shuffleList(imgList);

// Game Board Object
const gBoard = document.getElementById('g-board');
const gBoardCounter = document.getElementById('counter');
const gBoardCoins = document.getElementById("coins");
const ant = document.getElementById("ant");
const wrong = document.getElementById("wrong");
const gamePlay = document.getElementById('gamePlay');
const shuffleButton = document.getElementById("shuffle");
const glevel = document.getElementById("level");
const playButton = document.getElementById("play");
const goal = document.getElementById("goal");
const help = document.getElementById("help");

const gameCounter = 30;
var userCoins = 0;
var level = 0;
var reshuffleMe = 0;

// Game Function
const gShuffle = () => {
 
  // Photos List
  const photos = [];
  
  // Selecting the first 9 Images From imgList
  imgList.forEach (function(item){
    if (photos.length < 11) {
      photos.push(item);
    }
  });
  
  // Picking Only One Image as Answer from imgList and Adding it 3 times to newImgList
  while (photos.length < 15) {
    photos.push(imgList[12] + ' id ="ant" Onclick="antClick(this)" ');
  }
 
  // Re-arranged Photos For Game Start
  shuffleList(photos);
  shuffleList(photos);
  shuffleList(photos);
  shuffleList(photos);
  
  // Adding Game Photo to Game Board
  photos.forEach(function(photo) {
    const gPhoto = photo + 'id="wrong" onClick="wrongAnt()" ' + ' />';
    gBoard.appendChild(document.createElement('div')).innerHTML = gPhoto;
  });
}

// Game Timer Function
var systemPoints = 10;
const gEngine = () => {
  var  gTym = gameCounter;
  var gTimer = 
  setInterval(function(){
    gTym -= 1;
    gBoardCounter.innerText = gTym;
    //if (gTym == 5 || gTym == 10 || gTym == 15 || gTym == 20 || gTym == 25) {
    //   shuffle();
    //}
    if (gTym == 0){
      clearInterval(gTimer);
      confuse.play();
      gEnd();
    }
    if (userCoins === systemPoints){
      clearInterval(gTimer);
      systemPoints += 5;
      level += 1;
      glevel.innerText = "Lv " + level;
      userCoins = 0;
      contiNue.play();
      gBoardCoins.innerHTML = '<span>' + m25 + " " + userCoins + '</span>';
      gBoardCounter.innerText = 0;
      newLevel();
    }
  }, 100);
}
    
// Function to Reshuffle images
const shuffle = () => {
  gBoard.innerHTML = "";
  gShuffle();
};

const shuffleSound = () => {
  gamePlay.style.display = "none";
  shuffle();
  punch.play();
}

const wrongAnt = () => {
  funke.play();
  gBoardCoins.innerHTML = '<span>' + m25 + " " + userCoins + '</span>';
}

const antClick = (pic) => {
  pic.parentNode.remove();
  userCoins += 1;
  gBoardCoins.innerHTML = '<span>' + m25 + " " + userCoins + '</span>';
  reshuffleMe += 1;
  if (reshuffleMe == 4){
    shuffleSound();
    reshuffleMe = 0;
  }
}

gamePlay.innerHTML = "<h2> Find This Image and Collect 10 Coins </h2> <br/>" + imgList[12] + "/>";
goal.innerText = "G-" + systemPoints;

const play = () => {
  playButton.style.display = "none";
  gamePlay.style.display = "none";
  shuffleButton.style.display = "block";
  shuffle();
  gBoard.style.display = "grid";
  gEngine();
  instrumental.play();
}

const newLevel = () => {
  gBoard.style.display = "none";
  gamePlay.style.display = "block";
  shuffleList(imgList);
  gamePlay.innerHTML = "<h2> Find This Image and Collect " + systemPoints + " coins </h2>" + imgList[12] + "/>";
  goal.innerText = "G-" + systemPoints;
  playButton.style.display = "block";
  shuffleButton.style.display = "none";
}

const tryAgain = () => {
  gamePlay.innerHTML = "<img src='img/gameover.gif' /> <div id='try' onClick ='yes()'> <br/> <h2> Would like to play again <br/> <br/> <button id='yes'> Yes </button> <a href='index.html'><button id='no'> No </button></a> </div> <br/>";
  playButton.style.display = "none";
}

const gEnd = () => {
  gBoard.style.display = "none";
  gamePlay.style.display = "block";
  help.style.display = "none";
  playButton.style.display = "block";
  shuffleButton.style.display = "none";
  tryAgain();
  ayele.play();
  instrumental.pause();
  instrumental.currentTime = 0;
}

const yes = () => {
  help.style.display = "block";
  newLevel();
}
