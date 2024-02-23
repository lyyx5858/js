let a = 0;

function foo() {
  console.log(a++);
  foo();
}

foo();
