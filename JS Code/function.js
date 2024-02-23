function changeProperty(obj) {
  //调用时是将myObj的地址的值复制给了obj
  obj.name = "new value";
  obj1 = obj; //此处是将obj的地址copy给了obj1
  obj1.name = "lisi";

  obj = {}; // 新建一个对象时, obj的值会成为新值,与原来复制进来的值已经没有关系了
  obj.name = "zhang san";

  console.log(obj1.name); //还是lisi
}

let a = new Object();
a.name = "test";

console.dir(a);

var myObj = { name: "original value" };

console.log(myObj.name); // 输出 "original value"

//调用函数
changeProperty(myObj);

console.log(myObj.name); // 输出 "lisi"
