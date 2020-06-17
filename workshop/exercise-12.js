// Q12
// Build on what you did for Q9.
// This time the function should return a letter grade instead of the average.
// Here is how I calculate the grades
// <60 	is F
// <70 	is D
// <80 	is C
// <90 	is B
// <100 is A

// Write function here
function calculateAverage(grades) {
    let num = 0;
    grades.forEach(function (num1) {
        num += num1;
    });
        return Math.round(num / grades.length);
    }

    function numGrade(num1){
        let numGrade1 = 'A';
        if (num1<90) numGrade1 = 'B';
        if (num1<80) numGrade1 = 'C';
        if (num1<70) numGrade1 = 'D';
        if (num1<60) numGrade1 = 'F';
        return numGrade1;

    }
    console.log(numGrade(calculateAverage([48, 95, 65, 48, 59, 78, 72, 65])));


// Call the function with [48, 95, 65, 48, 59, 78, 72, 65]

// Try with other values as well
