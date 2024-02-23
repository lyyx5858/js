async function exampleFunction() {
  console.log("开始执行");
  await new Promise((resolve) => setTimeout(resolve, 2000)); // 等待2秒
  await new Promise((resolve) => setTimeout(resolve, 1000)); // 等待2秒
  console.log("等待结束");
}

exampleFunction();
