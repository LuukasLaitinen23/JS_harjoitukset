let score = +prompt('Give score');
let grade;
switch (true) {
  case score >= 0 && score <= 39:
    grade = 0;
    break;
  case score >= 40 && score <= 51:
    grade = 1;
    break;
  case score >= 52 && score <= 63:
    grade = 2;
    break;
  case score >= 64 && score <= 75:
    grade = 3;
    break;
  case score >= 76 && score <= 87:
    grade = 4;
    break;
  case score >= 88 && score <= 100:
    grade = 5;
    break;
}

let p = document.getElementById('result');
p.innerText = `Grade: ${grade}`;
