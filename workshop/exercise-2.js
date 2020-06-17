// Q2
// Write a function that accepts two integers and displays
// the greater one.

// Define the function
function max(num1, num2) {
  let biggerValue = 0;
  if (num1 > num2) {
    biggerValue = num1;
  } else {
    biggerValue = num2;
  }
  console.log(biggerValue + "" + "is the bigger number out of these 2 numbers");
}

// Call the function
max(12, 43);
