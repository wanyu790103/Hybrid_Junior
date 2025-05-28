function checkSpell(spell) {
  const stack = [];
  const pairs = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  for (let char of spell) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else if (char === ')' || char === ']' || char === '}') {
      if (stack.length === 0 || stack[stack.length - 1] !== pairs[char]) {
        console.log("施法失敗");
        return;
      }
      stack.pop();
    }
  }

  if (stack.length === 0) {
    console.log("施法成功");
  } else {
    console.log("施法失敗");
  }
}
