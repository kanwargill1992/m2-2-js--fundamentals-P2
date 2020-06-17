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
function displayContent(){

    for (const grade = 0; grade < numericalGrade.length; grade++) {
if (gradeData[grade] >= 100) {

    document.write( "" + nameData[grade] + "A");
}
else if (gradeData[grade]>= 90) {

    document.write("" + nameData[i] + "B");
}
else if (gradeData[grade]>= 80) {
    document.write("" + nameData[i] + "C");
}
else if (gradeData[grade]>= 70) {
    document.write("" + nameData[i] + "D");
}
else  if (gradeData[grade]>=60){
    document.write("" + nameData[i] + "F");
}
    }
}


// Call the function with [48, 95, 65, 48, 59, 78, 72, 65]

// Try with other values as well
