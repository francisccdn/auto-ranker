let winner = JSON.parse(localStorage.getItem('winner'));

let imgEl = document.querySelector('.option > img');
let nameEl = document.querySelector('.option > figcaption');

imgEl.src = winner.img;
nameEl.textContent = winner.name;

localStorage.removeItem('winner');