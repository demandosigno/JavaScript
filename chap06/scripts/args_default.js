function getTriangleArea(base = 10, height = 5) {
  // function getTriangleArea(base = 10, height = base) {
  return base * height / 2;
}

console.log(getTriangleArea()); // 10 * 5 / 2 = 25
console.log(getTriangleArea(4)); // 4 * 5 / 2 = 10
console.log(getTriangleArea(1, 2)); // 1 * 2 / 2 = 1

console.log(getTriangleArea(5, null)); // 5 * null / 2 = 0
console.log(getTriangleArea(5, undefined)); // 5 * 5 / 2 = 12.5
