// Simon Game

// Initilization 
let gameSeq = [];
let userSeq = [];
let h2 = document.querySelector('h2');
let colors = ["yellow","green","red","purple"];

let h3 = document.querySelector('h3');
let highScore = 0;
let level = 0;
let started = false;

// Document EventListener for start game 
document.addEventListener("keypress", function() {
    if( started == false) {
        started = true;
        console.log("Game start");
    }
    levelUp();
});

// Box flash function, its work to flash random box when we choose flash box according to game seq
function flash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    },100);
}

// Check seq function, it check user seq are match to game seq
function checkSeq(idx) {
    if(gameSeq[idx] == userSeq[idx]) {
        if(gameSeq.length == userSeq.length) {
            pause();
            nextLevel();
            setTimeout(() => {
                levelUp();
            },700);
        }
    } else {
        h2.innerHTML = `Game Over! Your score was <b> ${level} </b> </br>Press any to start again`;
        if( highScore < level) {
                highScore  = level;
                h3.innerText = `High Score ${highScore}`;
        }
        gameOver();
        reset();
    }
}

// Level Function stored its random color, level up, game seq. , reset, userSeq etc.
function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;
    
    // Random button choose
    let randIdx = Math.floor(Math.random() * 3);
    let randcolor = colors[randIdx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameSeq.push(randcolor);
    flash(randbtn);
}

// userflash function for practice
function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(() => {
        btn.classList.remove("userflash");
    },100);
}

// btnpress function
function btnpress() {
    let btn = this;
    flash(btn);
    let userbtn = btn.getAttribute("id");
    userSeq.push(userbtn);
    checkSeq(userSeq.length-1);
}

// Initilize all btns
let Allbtns = document.querySelectorAll(".btn");
for( btn of Allbtns) {
    btn.addEventListener("click", btnpress)
}

// reset function, it work to start game at starting.
function reset() {
    gameSeq = [];
    userSeq = [];
    level = 0;
    started = false;
}

// nextLevel function for background color when levelUp
function nextLevel() {
    let body = document.querySelector("body");
    body.classList.add("nextLevel");
    setTimeout(() => {
        body.classList.remove("nextLevel")
    },300);
}

// gameOver function for background color when choose wrong seq
function gameOver() {
    let body = document.querySelector("body");
    body.classList.add("gameOver");
    setTimeout(() => {
        body.classList.remove("gameOver")
    },300);
}

// Pause function for background color when choose correct seq by user
function pause(){
    let body = document.querySelector("body");
    body.classList.add("pause");
    setTimeout(() => {
        body.classList.remove("pause")
    },100);
}