let re = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/di;
let re2 = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/i;
let str = `サポートサイトはhttp://www.example.com/です。
           サンプル紹介サイトHTTPS://www.web-deli.com/もよろしく！`;
console.log(str.match(re));
console.log(str.match(re2));
