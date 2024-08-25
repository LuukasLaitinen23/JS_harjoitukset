function sortArray(numbers) {
  let sortedArray = numbers.sort((a, b) => a - b);
  return sortedArray;
}

let numbers = [9, 6, 3, 0, 8];

console.log(sortArray(numbers));
