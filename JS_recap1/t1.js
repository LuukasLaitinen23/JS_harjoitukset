let celsius = +prompt('Give temperature in Celsius');

let fahrenheit = (celsius * 9) / 5 + 32;

let p = document.getElementById('result');
p.textContent = `Temperature in Fahrenheit: ${fahrenheit}`;
