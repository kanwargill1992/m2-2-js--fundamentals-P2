// Q3.1
// Write a function that accepts two integers and returns
// the greater one. (this is slightly different from the previous question.)

// Also, wouldn't it be nice if there were a Math method that could simplify the code....
// https://www.w3schools.com/jsreF/jsref_obj_math.asp
function max(num1, num2) {
  console.log("Starting max", num1, " ", num2);
  return Math.max(num1, num2);
}
console.log(max(12, 43));
// Q3.2
// Without changing the function at all,
// Can you figure out how we could use it to determine the greater number between 4 integers?
console.log(max(max(13, 45), max(34, 45)));

// Q3.3
// Would this work with more integers?
//Yes it would using Math.max function.
