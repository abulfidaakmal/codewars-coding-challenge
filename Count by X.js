function countBy(x, n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    result.push(x * i);
  }

  return result;
}

// https://www.codewars.com/kata/5513795bd3fafb56c200049e