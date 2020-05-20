let plus = document.querySelector(".icon-alone");
let flexbox = document.querySelector(".flex");

let nameEls = document.querySelectorAll(".option > .inForm > .name");
let	figEls = document.querySelectorAll(".option > .inForm > .fig");
let optionsLength = 3;

let updateOptionEls = function() {
	nameEls = document.querySelectorAll(".option > .inForm > .name");
	figEls = document.querySelectorAll(".option > .inForm > .fig");
	optionsLength = nameEls.length;
}

let createNewOption = function() {
/*
<div class="option">
    <div class="inForm">
        <label class="text" for="image">Image: </label>
        <input class="fig" type="file" accept="image/*" name="image">
    </div>

    <div class="inForm">
        <label class="text" for="name">Name: </label>
        <input class="name" type="text" name="name">
    </div>
</div>
*/

	let option = document.createElement("div");
	option.className = "option";

	let inForm1 = document.createElement("div");
	inForm1.className = "inForm"; 

	let inForm2 = document.createElement("div");
	inForm2.className = "inForm";

	let label1 = document.createElement("label");
	label1.className = "text";
	label1.htmlFor = "image";
	label1.textContent = "Image: ";

	let label2 = document.createElement("label");
	label2.className = "text";
	label2.htmlFor = "name";
	label2.textContent = "Name: ";

	let input1 = document.createElement("input");
	input1.className = "fig";
	input1.setAttribute("type", "file");
	input1.setAttribute("accept", "image/*");
	input1.name = "image";

	let input2 = document.createElement("input");
	input2.className = "name";
	input2.setAttribute("type", "text");
	input2.name = "name";

	inForm1.appendChild(label1);
	inForm1.appendChild(input1);
	inForm2.appendChild(label2);
	inForm2.appendChild(input2);

	option.appendChild(inForm1);
	option.appendChild(inForm2);

	flexbox.insertBefore(option, plus);

	updateOptionEls();
}

let onSubmitClick = function() {
	let options = {
		names : [],
		imgs : [],
		length : optionsLength
	};

	for (let i = 0; i < optionsLength; i++) {
		options.names.push(nameEls[i].value);
		options.imgs.push(figEls[i].value);
	}

	localStorage.setItem('options', JSON.stringify(options));

	window.location.href = "ranker.html";
}

document.getElementById("plus").addEventListener("click", createNewOption);

document.getElementById("submit").addEventListener("click", onSubmitClick);