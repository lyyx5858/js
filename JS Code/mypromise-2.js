function resolve(data) {
  console.log("完成", data);
}
function reject(reason) {
  console.log("失败", reason);
}

function promise(exec) {
  //这是promise函数的定义, exec是形参
  //promise函数的内容就一行, 执行传进来的的函数exec
  //exec执行时需要两个参数, 因此将resolve函数和reject函数作为实参进行执行
  //假如传进来的是exec是sum(a,b)函数, 那这里就如同sum(1,2),执行函数时参数必须是实体.
  //而传进来的是箭头函数, 因此,实际效果是执行:  (resolve,reject)=>{箭头函数体}
  //箭头函数就一句话, 就是执行第一个函数OK(“123”)(OK是形参), 最终结果就是执行resolve("123")
  exec(resolve, reject);
}

//这里是promise函数调用, 调用时,将箭头函数作为实参传给了promise
// 大括号里面是箭头函数的定义, 而不是调用.这个箭头函数的调用是在函数promise内部进行
//这里就是我将箭头函数做为参数,传给promise,让它调用这个箭头函数,但是调用这个箭头函数的前提是,要提供两个函数作为箭头函数的实参
promise((ok) => {
  ok("123");
});

// 上面是下面写法的简写:
const a = function (ok, no) {
  ok("456");
  no("789");
};
//a=exec
promise(a);
