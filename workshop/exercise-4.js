// Q4
// Write a function that accepts 5 grades (numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)

function calculateAverage(a, b, c, d, e) {
  return Math.round((a + b + c + d + e) / 5);
}

//I tried this but it doesnt work:
//const arrSum = function(arr){
//    return arr.reduce(function(a,b,c,d,e)){
//       return a+b+c+d+e
//   },0);
//}

// make certain to console the returned value
console.log(calculateAverage(76, 60, 83, 100, 78));

//Answer: 79
