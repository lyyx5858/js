function test1(a) {
  console.log(a);
}

const test2 = function (a) {
  console.log(a);
};

const test3 = () => {
  console.log("abc");
};
test1(1);
test2(2);
test3();
