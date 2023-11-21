const score = document.querySelector(".score");
const startScreen = document.querySelector(".startScreen");
const gameArea = document.querySelector(".gameArea");

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);

let player = {
    speed: 5,
};

startScreen.addEventListener("click", startGame);

let keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false,
};

function keyDown(e) {
    e.preventDefault();
    keys[e.key] = true;
}
function keyUp(e) {
    e.preventDefault();
    keys[e.key] = false;
}
function moveLines() {
    let lines = document.querySelectorAll(".line");
    lines.forEach((line, index) => {
        if (line.y >= 700) {
            line.y -= 750;
        }
        line.y += player.speed;
        line.style.top = line.y + "px";
    });
}