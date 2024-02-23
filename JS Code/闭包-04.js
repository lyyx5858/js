function foo() {
  var count = 40;
  function temp() {
    console.log(count);
  }
  bar(temp);
}

function bar(param) {
  var count = 50;
  param();
  console.dir(param);
}

foo();
