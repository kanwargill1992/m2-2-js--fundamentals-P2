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
function displayContent(numericalGrade) {
  for (let grade = 0; grade < numericalGrade.length; grade++) {
    console.log("For grade: " + numericalGrade[grade]);
    if (numericalGrade[grade] >= 90) {
      console.log("A");
    } else if (numericalGrade[grade] >= 80) {
      console.log("B");
    } else if (numericalGrade[grade] >= 70) {
      console.log("C");
    } else if (numericalGrade[grade] >= 60) {
      console.log("D");
    } else if (numericalGrade[grade] < 60) {
      console.log("F");
    }
  }
}

// Call the function with
displayContent([48, 95, 65, 48, 59, 78, 72, 65]);

// Try with other values as well
