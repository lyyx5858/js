class MyPromise {
  constructor(executor) {
    executor(this._resolve, this._reject);
  }
  _resolve(data) {
    console.log("完成", data);
  }
  _reject(reason) {
    console.log("失败", reason);
  }
}

const p1 = new MyPromise((ok, no) => {
  ok("123");
});
