let data = ['apple', 'orange', 'banana'];
data.forEach(function (value, index, array) {
  console.log(value);
  console.log(index);
  console.log(array);
});

data.forEach(function (value) {
  console.log(value);
});