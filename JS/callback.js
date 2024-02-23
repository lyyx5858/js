function fetchData(callback) {
  // 模拟异步操作，比如从服务器获取数据
  setTimeout(() => {
    const data1 = "回调函数被调用了";
    callback(data1); // 异步操作完成后调用回调函数，将数据传递给它
  }, 2000);
}

function processData(data) {
  console.log("Processing data:", data);
}

fetchData(processData); // 传递回调函数给fetchData函数
