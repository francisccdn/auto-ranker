let aEl = document.getElementById("a");
let aImgEl = document.querySelector("#a img");
let aTextEl = document.querySelector("#a .text");

let bEl = document.getElementById("b");
let bImgEl = document.querySelector("#b img");
let bTextEl = document.querySelector("#b .text");

let onAClick = function() {
    aImgEl.src = "img/whisper.jpg";
    aTextEl.textContent = "Whisper of the Heart";
}

let onBClick = function () {
    bImgEl.src = "https://themedium.ca/wp-content/uploads/2018/11/Arts-REWIND-1.jpg";
    bTextEl.textContent = "Whisper of the Heart";
}

aEl.addEventListener("click", onAClick);
bEl.addEventListener("click", onBClick);