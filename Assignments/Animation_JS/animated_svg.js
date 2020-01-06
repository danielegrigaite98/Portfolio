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
