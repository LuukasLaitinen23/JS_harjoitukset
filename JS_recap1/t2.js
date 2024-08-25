let x1 = +prompt('Give x of first point');
let y1 = +prompt('Give y of first point');
let x2 = +prompt('Give x of second point');
let y2 = +prompt('Give y of second point');

let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

let p = document.getElementById('result');
p.textContent = `Distance between points: ${distance}`;
