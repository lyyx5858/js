const p1 = new Promise((resolve, reject) => {
  //如果咱们公司今年挣钱了，年底就发奖金，否则不发
  //reject(456);
  resolve(123);
});
console.log("p1 is", p1);

let p2 = p1.then(
  (a) => {
    console.log("发奖金", a);
    return 1;
  },
  (b) => {
    console.log("不发奖金", b);
  }
);

console.log("p2 is", p2);
