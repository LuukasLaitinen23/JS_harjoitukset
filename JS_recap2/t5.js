function sortArray(numbers, order) {
  if (order === 'asc') {
    let sortedArray = numbers.sort((a, b) => a - b);
    return sortedArray;
  } else if (order === 'desc') {
    let sortedArray = numbers.sort((a, b) => b - a);
    return sortedArray;
  }
}

let numbers = [9, 6, 3, 0, 8];

console.log(sortArray(numbers, 'asc'));
console.log(sortArray(numbers, 'desc'));
