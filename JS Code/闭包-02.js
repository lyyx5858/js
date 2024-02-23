function outerFunction(out) {
  return function innerFunction(in1) {
    console.log("Outer variable: ", out);
    console.log("Inner variable: ", in1);
  };
}
const anotherFunction = outerFunction("out"); // Execute the function
anotherFunction("in");
