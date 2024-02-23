function sayHi() {
  console.log("Hello " + arguments[0] + ", " + arguments[1]);
  console.log(arguments.length);
}

sayHi("abc", "def");

function doAdd(num1, num2) {
  arguments[1] = 10;
  console.log(arguments[0] + num2);
}
