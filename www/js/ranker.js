let option_a = document.querySelector(".a");
let option_b = document.querySelector(".b");
let a_caption = document.querySelector(".a > figcaption");
let b_caption = document.querySelector(".b > figcaption");
let a_img = document.querySelector(".a > img");
let b_img = document.querySelector(".b > img");

let whisper = 0;
let totoro = 0;
let spirited = 0;

option_a.addEventListener("click", select_a);
option_b.addEventListener("click", select_b);

/* $.getJSON("./elements.json", function(result) {
    let elements = JSON.parse(result);
}); */

let elements = {
    "names" : ["Cordova", "New"],
    "imgs" : ["img/logo.png"],
    "points" : [0]
}

function foo (){
    a_caption.innerHTML = "elements.names[0]";
    b_img.src = elements.imgs[0];
}

function select_a()
{
    if(a_caption.innerHTML == "Spirited Away")
    {
        spirited += 1;
    }
    else if(a_caption.innerHTML == "My Neighbour Totoro")
    {
        totoro += 1;
    }

    a_img.src = "img/whisper.jpg";
    a_caption.innerHTML = "Whisper of the Heart";
}

foo();