function delay(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("finished");
    }, time);
  });
}

delay(1000).then((ok) => {
  console.log(ok);
});
