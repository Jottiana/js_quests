// Declare and define three variables using a numerical value

// * If the three variables are equal, display "The three variables are the same" in the console
// * If only two of the variables are equal, display "Two of the variables are the same" in the console
// * If the variables are all different display "all variables are different" in the console



const a = 1;
const b = 2;
const c = 3;


if (a === b && a === c) {
  console.log("The three variables are the same");
} else if (a === b || a === c || b === c) {
  console.log("Two of the variables are the same");
} else {
  console.log("all variables are different");
}