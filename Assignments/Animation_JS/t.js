const inBtn = document.querySelector("#in");
const flipBtn = document.querySelector("#flip");
const idleBtn = document.querySelector("#idle");
const fallBtn = document.querySelector("#fall");
const jumpBtn = document.querySelector("#jump");
const spinBtn = document.querySelector("#spin");
const jumpoBtn = document.querySelector("#jumpo");
const outBtn = document.querySelector("#out");
const vanishBtn = document.querySelector("#vanish");
const shakeBtn = document.querySelector("#shake");
const rollBtn = document.querySelector("#roll")



const wrap = document.querySelector("#wrap");
const baby = document.querySelector("#baby");
const babywrap = document.querySelector("#babywrap");

inBtn.addEventListener("click", playSound)
inBtn.addEventListener("click", startZoomIn);
flipBtn.addEventListener("click", playSound)
flipBtn.addEventListener("click", startFlip);
idleBtn.addEventListener("click", playSound)
idleBtn.addEventListener("click", startIdle);
fallBtn.addEventListener("click", playSound)
fallBtn.addEventListener("click", startFall);
jumpBtn.addEventListener("click", playSound)
jumpBtn.addEventListener("click", startJump);
spinBtn.addEventListener("click", playSound)
spinBtn.addEventListener("click", startSpin);
jumpoBtn.addEventListener("click", playSound)
jumpoBtn.addEventListener("click", startJumpo);
outBtn.addEventListener("click", playSound)
outBtn.addEventListener("click", startZoomOut);
vanishBtn.addEventListener("click", playSound)
vanishBtn.addEventListener("click", startVanish);
shakeBtn.addEventListener("click", playSound)
shakeBtn.addEventListener("click", startShake);
rollBtn.addEventListener("click", playSound);
rollBtn.addEventListener("click", startRoll);

const sound = new Audio()

 function playSound() {
    sound.src = "click.mp3"
    sound.play()
 }

function startRoll() {
    console.log("roll button clicked");
    baby.classList = "";
    wrap.classList = "";
    wrap.classList.add("walk");
    babywrap.classList="";
    babywrap.classList.add("roll")
}

function startZoomIn() {
    console.log("zoom in button was clicked");
    baby.classList = "";
    wrap.classList = "";
    babywrap.classList="";
    babywrap.classList.add("zoomIn")
}

function startFlip() {
    console.log("run button was clicked");
    baby.classList = "";
    wrap.classList = "";
    babywrap.classList="";
    babywrap.classList="flip"
}


function startIdle() {
    console.log("idle button was clicked");
    baby.classList = "";
    baby.classList.add("idle");
    wrap.classList = "";
    babywrap.classList="";
}

function startFall() {
    console.log("fall button was clicked");
    baby.classList = "";
    baby.classList.add("fall");
    wrap.classList = "";
    babywrap.classList="";
}

function startJump() {
    console.log("jumping button was clicked");
    baby.classList = "";
    baby.classList.add("jump");
    wrap.classList = "";
    wrap.classList.add("jump");
    babywrap.classList="";
}

function startSpin(){
    console.log("spin button was clicked");
    baby.classList = "";
    wrap.classList = "";
    babywrap.classList="";
    babywrap.classList.add("spin");
}

function startJumpo(){
    console.log("jump button was clicked");
    baby.classList = "";
    baby.classList.add("jumpo");
    wrap.classList="";
    babywrap.classList="";
}

function startZoomOut(){
    console.log("zoom out button was clicked")
    baby.classList = "";
    wrap.classList="";
    babywrap.classList="";
    babywrap.classList.add("zoomOut");
}

function startVanish(){
    console.log("vanish button was clicked")
    baby.classList = "";
    baby.classList.add("idle");
    wrap.classList="";
    babywrap.classList="";
    babywrap.classList.add("vanish");
}

function startShake(){
    console.log("shake button was clicked")
    baby.classList = "";
    baby.classList.add("idle");
    wrap.classList="";
    babywrap.classList="";
    babywrap.classList.add("shake");
}
const lines = document.querySelectorAll(".cls-1");
window.addEventListener("load", start);

function start() {
    lines.forEach(drawThis);
}

function drawThis(line, i) {
    console.log(i);
    setTimeout(function () {
                line.classList.add("draw");
            },i * 1000); }

