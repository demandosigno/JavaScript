function printf(format, ...args) {
  for (let i = 0; i < args.length; i++) {
    let pattern = new RegExp(`\\{${i}\\}`, 'g');
    console.log(pattern);
    format = format.replaceAll(pattern, args[i]);
  }
  console.log(format);
}

printf('こんにちは、{0}さん。私は{1}です。', '掛谷', '山田');
/^[a-z]{3}@demo/gm