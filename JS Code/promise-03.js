const p1 = new Promise((ok, no) => {
  ok("成功了");
}).then((x) => {
  console.log(x);
});
