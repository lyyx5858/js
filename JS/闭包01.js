let a = 1;

function foo() {
  console.log(a);
}

function bar() {
  return function () {
    console.log(a);
  };
}

foo();

let b = bar();
b();

/*
函数foo中用到了外面的变量a，其实这时已经产生了闭包，可以在console.log语句打断点观察到，
但是，随着foo函数调用结束，这个闭包也就结束了。

但是如果将这个闭包用一个方法（有很多方法，这个例子只是一种最常用的方法）传出它产生的环境，那么这个闭包就不会消失了。如同bar函数一样。


*/
