let url = "http://ip-api.com/json/24.48.0.1";

const getUrl = function () {
  fetch(url)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
};

//getUrl();

//利用async and await实现相同功能
const geturl2 = async function () {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
};

//geturl2();

// async and await 的例子
const p1 = async function () {
  const response = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("解决了");
    }, 3000);
  });
  console.log(response);
};

//p1();

(async () => {
  try {
    const result = await p1();
    console.log(result);
  } catch {}
})();
