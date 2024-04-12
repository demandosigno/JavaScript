var scope = 'Global Scope';

function getValue() {
  console.log(scope); // scope_collision.jsに追記。幾つになる？
  // var scope = 'Block Scope';
  let scope = 'Block Scope';
  return scope;
}

console.log(getValue());
console.log(scope);
