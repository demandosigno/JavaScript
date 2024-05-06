function arrayWalk(data, callback) {
  // for (let [key, value] of data.entries()) {
  console.log(data);
  console.log(data.entries());
  for (let [key, value] of data.entries()) {
    callback(key, value);
  }
}

function showElement(key, value) {
  console.log(`${key}：${value}`);
}

let list = [1, 2, 4, 8, 16];
console.log(list);
console.log(list.entries());
for (let value of list) {
  console.log(value);
}

arrayWalk(list, showElement);
