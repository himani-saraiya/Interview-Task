var array1 = [3, 4, 7, 21, 38, 56];
var array2 = [3, 4, 10, 22, 38, 57];

const unionArray = array1.slice();

array2.filter(value => {
    if (!array1.includes(value)) {
        unionArray.push(value);
    }
});

const subtractionArray = array1.filter(item => !array2.includes(item));

console.log("Union of arrays:", unionArray);
console.log("Subtraction of arrays:", subtractionArray);
