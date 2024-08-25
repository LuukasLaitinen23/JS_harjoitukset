let n = +prompt('Give number');
let result = 0;

for (let i = 1; i <= n; i++) {
  result += i;
}

let p = document.getElementById('result');
p.innerText = `Sum: ${result}`;
