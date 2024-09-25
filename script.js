const btn = document.getElementById ('btn');
const range = document.getElementById ('range');
const text = document.getElementById ('text');
const square = document.getElementById('square');
const e_btn = document.getElementById('e_btn');
const circle = document.getElementById('circle');
const span = document.getElementById('range-span');

let bg = 0;

const textValue = function (event) {
    bg = event.target.value;
}

const btnClick = function (event) {
    square.style.backgroundColor = bg;
    e_btn.style.display = 'none';
}

const changeDiameter = function (event) {
    span.textContent = event.target.value+'%';
    circle.style.width = event.target.value+'%';
    circle.style.height = event.target.value+'%';
}

text.addEventListener('input', textValue);
btn.addEventListener('click',btnClick);
range.addEventListener('input',changeDiameter);



