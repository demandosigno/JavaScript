function showResult(str, reg) {
  let results = str.matchAll(reg);
  for (let result of results) {
    console.log(result[0]);
  }
  console.log('-----------');
}

let re1 = /あい(?=うえ)/g; // 肯定先読み「うえ」が後に続く「あい」
let re2 = /あい(?!うえ)/g; // 否定先読み「うえ」が後に続かない「あい」
let re3 = /(?<=。)あい/g; // 肯定後読み「。」が直前にある「あい」
let re4 = /(?<!。)あい/g; // 否定後読み「。」が直前にない「あい」
let str1 = 'あいうえおかきくけこ';
let str2 = 'あいすべきサルですね。あいあいは';

showResult(str1, re1); // あい
showResult(str2, re1); //（なし）
showResult(str1, re2); //（なし）
showResult(str2, re2); // あい、あい、あい
showResult(str1, re3); //（なし）
showResult(str2, re3); // あい
showResult(str1, re4); // あい
showResult(str2, re4); // あい、あい
