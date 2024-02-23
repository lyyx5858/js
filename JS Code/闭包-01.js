function B() {
  let a = 6;
  let i = 0;
  function A() {
    a++;
    i++;
    console.log(a);
  }
  return A;
}
let c = B();
c();
console.dir(c);
