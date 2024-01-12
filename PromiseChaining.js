function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Some data1");
      resolve("success");
    }, 4000);
  });
}

function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Some data2");
        resolve("success");
    }, 4000);
  });
}
// this is called promise chaining
console.log("fetching data1......");
let p1 = asyncFunc1();
p1.then((res) => {
    console.log("Fetching data2.......");
  let p2 = asyncFunc2();
  p1.then((res) => {
  });
});
