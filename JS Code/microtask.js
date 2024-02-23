console.log("START");

Promise.resolve().then(() => {
  console.log("Promise resolved");
  setTimeout(() => console.log("Inside setTimeout"), 0);
});

setTimeout(() => console.log("Outer setTimeout"), 0);

console.log("END");
