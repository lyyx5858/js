let doms = document.querySelectorAll("*");
// 注意这里要获取每一个元素的标签名, 不获取的话就是每一个node节点
let domArr = Array.from(doms, (ele) => ele.tagName);

function unique(arr) {
  return arr.filter((item, index, arr) => {
    return arr.indexOf(item, 0) == index;
  });
}

let farr = unique(domArr);

function arrAll(arr) {
  return arr.reduce((obj, name) => {
    if (name in obj) {
      obj[name]++;
    } else {
      obj[name] = 1;
    }
    return obj;
  }, {});
}
let arr2 = arrAll(domArr);
// 对象转成数组
let arr3 = Object.entries(arr2);
// 对数组进行排序
arr3.sort(function (a, b) {
  return a[1] - b[1];
});
