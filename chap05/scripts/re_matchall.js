let re = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gi;
let str = `サポートサイトはhttp://www.example.com/です。
           サンプル紹介サイトHTTPS://www.web-deli.com/もよろしく！`;

// let results = str.matchAll(re);
let results = str.match(re);
for (let result of results) {
  console.log(result);
}
console.log(results);
console.log(results[0][0]);
console.log(results[0][1]);
console.log(results[1][0]);