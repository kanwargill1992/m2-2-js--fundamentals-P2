// You are not allowed to for or while loops.
// Instead focus on the array methods (filter, map, forEach, etc)

// You will also need to verify that your functions work as expected. Be sure to test them. :)

// Q6
// Write a function that accepts a list of numbers and returns a new list with
// all of the even numbers removed.
function removeEvens(lst) {
  let evenRemoved = lst.filter(function (numbers) {
    return numbers % 2 !== 0;
  });
  return evenRemoved;
  // lst is an array of strings
}
// -------------------------------------------------------------------------
console.log("Q4 removeEvens()", removeEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
//V2
