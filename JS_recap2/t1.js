let fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
console.log(`Fruits: ${fruits}`);
console.log(`Length of fruits: ${fruits.length}`);
console.log(`Element at index 2: ${fruits[2]}`);
console.log(`Last element of fruits: ${fruits[fruits.length - 1]}`);

let vegetables = [];
for (let i = 0; i < 3; i++) {
  let input = prompt('Give vegetable');
  vegetables.push(input);
}
console.log(`Vegetables: ${vegetables}`);
console.log(`Length of vegetables: ${vegetables.length}`);
