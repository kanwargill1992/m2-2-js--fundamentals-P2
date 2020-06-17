// Q3.1
// Write a function that accepts two integers and returns
// the greater one. (this is slightly different from the previous question.)

// Also, wouldn't it be nice if there were a Math method that could simplify the code....
// https://www.w3schools.com/jsreF/jsref_obj_math.asp
function big(num1, num2){
    let bigNum = Math.max(num1, num2);
    console.log(bigNum);
}

// Q3.2
// Without changing the function at all,
// Can you figure out how we could use it to determine the greater number between 4 integers?
function big(num1, num2, num3, num4){
    let bigNum = Math.max(num1, num2, num3, num4);
    console.log(bigNum);
}

// Q3.3
// Would this work with more integers?
Yes it would using Math.max function.