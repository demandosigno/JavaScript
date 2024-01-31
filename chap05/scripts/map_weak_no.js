let obj = {};
let data = new Map();
data.set(obj, 'ほげ');
console.log(data);
obj = null;
console.log(data);
console.log(data.size);