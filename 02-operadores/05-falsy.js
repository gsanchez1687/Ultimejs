
function fn1() {
    console.log('fn1');
  return false;
}
function fn2() {
    console.log('fn2');
  return true;
}

let x = fn1() && fn2();

