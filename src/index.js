const addon = require("../build/Release/addon");
// const addon = require('./lib/addon')

console.time("cpp");
console.log(addon.sum());
console.timeEnd("cpp");

const jsSum = () => {
  let pi = 3.1415926;
  let a = 2.718;

  // for (i = 0; i < 100000000; i++) {
  for (i = 0; i < 10000000000; i++) {
    pi += a;
  }

  const total = pi;
  return total;
};

console.time("js");
console.log(jsSum());
console.timeEnd("js");
