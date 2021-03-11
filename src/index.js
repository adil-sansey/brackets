module.exports = function check(str, bracketsConfig) {
  let chars = str.split(''),
    stack = [],
    open = [],
    close = [];

  if (chars.length % 2 !== 0) return false;

  for (let i = 0; i < bracketsConfig.length; i++) {
    open.push(bracketsConfig[i][0]);
    close.push(bracketsConfig[i][1]);
  }

  stack.push(chars[0]);

  for (let i = 1; i < chars.length; i++) {
    if (close.includes(chars[i]) && open.indexOf(stack[stack.length - 1]) == close.indexOf(chars[i])) {
      stack.pop();
      //continue;
    } else {
      stack.push(chars[i]);
    }

  }

  return stack.length > 0 ? false : true;
}
