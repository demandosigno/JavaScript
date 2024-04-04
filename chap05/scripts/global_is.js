console.log(isNaN('hoge')); // 数値ではないかどうか(Not a Number)
console.log(Number.isNaN('hoge'));
console.log(Number.isNaN(NaN));
console.log(isNaN(NaN));
console.log(Number.isNaN('NaN'));
console.log(isNaN('NaN'));

console.log(isNaN(1));
console.log(Number.isNaN(1));
console.log(isNaN("1"));
console.log(Number.isNaN("1"));
console.log(isNaN('1'));
console.log(Number.isNaN('1'));
console.log('\n');
console.log(isNaN(2));
console.log(Number.isNaN(2));
console.log(isNaN("2"));
console.log(Number.isNaN("2"));
console.log(isNaN('2'));
console.log(Number.isNaN('2'));


var test = function (x) {
    if (isFinite(x)) {
        return x + x;
    }
};

console.log(test('10')); // "1010"