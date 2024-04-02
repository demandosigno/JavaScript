// let re = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gi;
// let re = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/i;
let re = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/dg;
let str = `サポートサイトはhttp://www.example.com/です。
           サンプル紹介サイトHTTPS://www.web-deli.com/もよろしく！`;

let results = str.match(re);
console.log(results);
for (let result of results) {
  console.log(result);
}
console.log(results.index);
console.log(results[0]);
console.log(results[1]); // 二つ目はない