async function a() {
  // throw "error";
  console.log("正在执行a....");
  const p = new Promise((resolve) => {
    setTimeout(() => {
      resolve("123");
    }, 5000);
  });
  return p;
}

async function b() {
  console.log("正在执行b....");
  const p = new Promise((resolve) => {
    setTimeout(() => {
      resolve("456");
    }, 5000);
  });
  return p;
}

async function c() {
  try {
    console.log("开始");

    await a();
    console.log("中间");

    await b();
    console.log("后面");

    return "成功";
  } catch {
    return 789;
  }
}

const c1 = c();

setTimeout(() => {
  console.log(c1);
  console.log("\n 全部结束");
}, 12000);
