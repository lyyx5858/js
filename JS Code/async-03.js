async function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
}

async function test() {
  console.log("    test start..");
  await delay(8000);
  console.log("    test end..");
  return;
}

//Main程序从这里开始....

console.log("1----main start..");

test();

console.log("2----main continue..");

delay(3000).then(() => console.log("    Then is end..."));

console.log("3----main end..");
