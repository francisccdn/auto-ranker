let items = JSON.parse(localStorage.getItem('items'));

let divEls = [];
let imgEls = [];
let nameEls = [];
let rankEls = [];

let flexbox = document.querySelector(".flex");

/* 
<div class="option">
    <h1 class="text result"></h1>
    <img src="">
    <figcaption class="text"></figcaption>
</div>
*/
for(let i = 0; i < items.length; i++)
{
    divEls[i] = document.createElement("div");
    divEls[i].className = "option";

    rankEls[i] = document.createElement("h1");
    rankEls[i].className = "text result";
    rankEls[i].textContent = i+1 + "th";

    imgEls[i] = document.createElement("img");
    imgEls[i].src = items[i].img;

    nameEls[i] = document.createElement("figcaption");
    nameEls[i].className = "text";
    nameEls[i].textContent = items[i].name;

    divEls[i].appendChild(rankEls[i]);
    divEls[i].appendChild(imgEls[i]);
    divEls[i].appendChild(nameEls[i]);

    flexbox.appendChild(divEls[i]);
}
divEls[0].id = "first";
rankEls[0].textContent = "Favorite";
rankEls[1].textContent = "2nd";
rankEls[2].textContent = "3rd";

localStorage.removeItem('items');