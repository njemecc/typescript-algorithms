function evalRPN(tokens: string[]): number {
  const stack = [];

  for (let i = 0; i < tokens.length; i++) {
    if (!isNaN(Number(tokens[i]))) {
      stack.push(Number(tokens[i]));
    } else {
      const second = stack.pop();
      const first = stack.pop();

      let value = 0;
      switch (tokens[i]) {
        case "+":
          value = first + second;
          break;
        case "-":
          value = first - second;
          break;
        case "*":
          value = first * second;
          break;
        case "/":
          value = Math.trunc(first / second);
          break;
      }

      stack.push(value);
    }
  }

  return stack[stack.length - 1];
}
