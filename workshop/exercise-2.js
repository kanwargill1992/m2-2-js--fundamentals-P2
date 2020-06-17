// Q2
// Write a function that accepts two integers and displays
// the greater one.

// Define the function
function max(num1, num2) {
    let bigNum;
    if (num1 > num2){
        bigNum = num1; 
    } else{
        bigNum = num2;
    }
}
console.log(`${bigNum} is a great number.`)

// Call the function
max(12, 43);
