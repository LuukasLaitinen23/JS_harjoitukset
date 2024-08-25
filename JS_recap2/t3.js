let numbers = [];

while (true) {
  let input = prompt("Enter a number (or 'done' to finish):");
  if (input === 'done') {
    break;
  }
  numbers.push(parseInt(input));
}

let evenNumbers = [];

for (let number of numbers) {
  if (number % 2 == 0) {
    evenNumbers.push(number);
  }
}

let p = document.getElementById('result');

if (evenNumbers.length > 0) {
  p.innerText = `Even numbers: ${evenNumbers.join(', ')}`;
} else {
  p.innerText = 'Even numbers: None';
}
