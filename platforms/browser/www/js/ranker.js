class Item{
    constructor(name, img) {
        this.name = name;
        this.img = img;
        this.points = 0;
        this.betterThan = [];
    }
}

let aEl = document.getElementById("a");
let aImgEl = document.querySelector("#a img");
let aTextEl = document.querySelector("#a .text");

let bEl = document.getElementById("b");
let bImgEl = document.querySelector("#b img");
let bTextEl = document.querySelector("#b .text");

let items = [];
items.push(new Item("My Neighbour Totoro", "img/totoro.jpg"));
items.push(new Item("Spirited Away", "img/spirited.jpg"));
items.push(new Item("Whisper of the Heart", "img/whisper.jpg"));
items.push(new Item("Kiki's Delivery Service", "img/kiki.jpg"));
items.push(new Item("Ponyo", "img/ponyo.jpg"));

let updateItems = function() {
    aImgEl.src = items[i].img;
    aTextEl.textContent = items[i].name;

    bImgEl.src = items[j].img;
    bTextEl.textContent = items[j].name;
}

let i = 1;
let j = 0;

updateItems();

let increment = function () {
    if(j == i-1) {
        i += 1;
        j = 0;
    }else {
        j += 1;
    }

    if(i >= items.length || j >= items.length) {
        // Go to rank page
        i = 0;
        j = 0;
    }
}

let onAClick = function() {
    items[i].points += 1;
    increment();
    updateItems();
}

let onBClick = function () {
    items[j].points += 1;
    increment();
    updateItems();
}

aEl.addEventListener("click", onAClick);
bEl.addEventListener("click", onBClick);