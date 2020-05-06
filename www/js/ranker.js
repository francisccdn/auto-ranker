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

for(let i = 0; i < items.length; i++)
{
    for(let j = i+1; j < items.length; j++)
    {
        let onAClick = function() {
            aImgEl.src = items[i].img;
            aTextEl.textContent = items[i].name;
        }

        let onBClick = function () {
            bImgEl.src = "img/whisper.jpg";
            bTextEl.textContent = "Whisper of the Heart";
        }

        aEl.addEventListener("click", onAClick);
        bEl.addEventListener("click", onBClick);
    }
}