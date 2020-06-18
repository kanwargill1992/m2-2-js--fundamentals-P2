// Q11
// Write a function that accepts an array of grades (numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)

function calculateAverage(grades) {
    let num = 0;
    grades.forEach(function (num1) {
        num += num1;
    });
        return Math.round(num / grades.length);
    }
console.log(calculateAverage([76, 60, 83, 100, 78]));
