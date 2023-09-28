const a = [-2, 3, 4, 0, 56, 0, -34, -3];

let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;
const positiveNumbers = [];
const negativeNumbers = [];
const zeroNumbers = [];

for (let i = 0; i < a.length; i++) {
  const num = a[i];

  if (num > 0) {
    positiveCount++;
    positiveNumbers.push(num);
  } else if (num < 0) {
    negativeCount++;
    negativeNumbers.push(num);
  } else {
    zeroCount++;
    zeroNumbers.push(num);
  }
}

console.log("Positive numbers:", positiveCount);
console.log("Negative numbers:", negativeCount);
console.log("Zero numbers:", zeroCount);
console.log("Positive numbers array:", positiveNumbers);
console.log("Negative numbers array:", negativeNumbers);
console.log("Zero numbers array:", zeroNumbers);

const negativePositions = [];
for (let i = 0; i < a.length; i++) {
  if (a[i] < 0) {
    negativePositions.push(i);
  }
}

console.log("Positions of negative numbers:", negativePositions);
