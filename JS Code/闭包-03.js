let i = 1;

function B() {
  let a = 5;
  console.log(i); //此处虽然方程B用到了外层变量i, 但从下面对B的打印可以看出, B是没有闭包的.

  function A() {
    console.log(a); //此处方程A用到了外层变量a, 从下面对A的打印可以看出, A是有闭包的. 这与A是否被return或者A是否被调用是没关系的.
  }

  console.dir(A);
  console.dir(B);

  //  return A;
}

B();

/*闭包产生的三个条件:
1. A在B里面
2. A用到了B的变量
3. B被调用了

只要满足上面3条条件就会产生闭包,所谓闭包就是一个附在A上的一个obj,这个obj里面有值,就是A用到的外层变量
这个对象的名字就是: Closure, 是在B被调用时立即产生的.
这个值是个引用,是可以变化和更新的.
闭包的产生与A是否返回以及A是否被调用没有关系.

*/
