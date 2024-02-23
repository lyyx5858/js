const p1 = new Promise((resolve, reject) => {
  //如果咱们公司今年挣钱了，年底就发奖金，否则不发
  //下面两个函数正常情况下,应该只有一个,但如果两个都写了,按顺序只执行一个即返回.
  //
  resolve(123);
  reject(78890);
  console.log("start");
  console.log(resolve);
});

console.log("p1 is", p1);

let p2 = p1.then(
  // Resolve, 此处是正常写法
  function (a) {
    console.log("发奖金", a);
    return 1;
  },

  // Reject, 此处是箭头函数写法
  (b) => {
    console.log("不发奖金", b);
  }
);

console.log("p2 is", p2);

console.log("END");
