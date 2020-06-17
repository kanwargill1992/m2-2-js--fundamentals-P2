// Q11
// Write a function that accepts an array of grades (numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)


function sumAverage(grades) {
    let sum = 0;
    grades.forEach(function (grades) {
    sum += grades;
    });

    return Math.round(sum / grades.length);
}

console.log(sumAverage([76, 60, 83, 100, 78]));
Ans 79