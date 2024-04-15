const chars = '0123456789abcdefghijklmnopqrstuvwxyz ,./;-"';
const random = (max) => Math.trunc(Math.random() * max);
const randomElement = (arr) => arr[random(arr.length)];

const creators = [
  () => random(100),
  () =>
    Array.from({ length: random(20) + 20 }, () => randomElement(chars)).join(
      ""
    ),
  () => Array.from({ length: random(5) + 5 }, () => random(256)),
  () => undefined,
];

// 1, 1
// 2, 3
// 3, 10
// 4, 10
function createBigJson(numberOfLevels = 1, numberOfKeys = 1) {
  const result = {};
  if (numberOfLevels > 0) {
    for (let i = 0; i < numberOfKeys; i++) {
      result[`key-${i + 1}`] = createBigJson(numberOfLevels - 1, numberOfKeys);
    }
  } else {
    for (let i = 0; i < numberOfKeys; i++) {
      result[`key-${i + 1}`] = randomElement(creators)();
    }
  }
  return result;
}

// console.log(createBigJson(2, 3));

module.exports = { createBigJson };
