// let re = /(?<area>0\d{1,3})-(?<city>\d{2,4})-(?<local>\d{3,4})/;
let re = /(?<area>0\d{1,3})-(?<city>\d{2,4})-(?<local>\d{3,4})/d;
let str = 'オフィスの電話番号は000-111-3333です。';

let result = str.match(re);
console.log(`
市外局番：${result.groups.area}
市内局番：${result.groups.city}
加入者番号：${result.groups.local}
市外局番：${result[1]}
市内局番：${result[2]}
加入者番号：${result[3]}
`);

console.log(result);
console.log(result[0]);
console.log(result.indices.groups.area);
