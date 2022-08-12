module.exports = function check(str, bracketsConfig) {
  const OPEN_BRACKETS = [];
  const BRACKETS_PAIR = {};

  for (let i = 0; i < bracketsConfig.length; i++) {
    let key = bracketsConfig[i][1];
    let value = bracketsConfig[i][0];
    OPEN_BRACKETS.push(value);
    BRACKETS_PAIR[key] = value;
  }

  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    let topElement = stack[stack.length - 1];

    if ((BRACKETS_PAIR[currentSymbol] === topElement) && (stack.length > 0)) {
      stack.pop();
      } else {
        if (OPEN_BRACKETS.includes(currentSymbol)) {
          stack.push(currentSymbol);
        }
        else if (stack.length === 0) {
          return false;
        }
      }             
    }
    return stack.length === 0;
  }
