function persistence(num) {
  let result = 0;

  while (num >= 10) {
    num = num
      .toString()
      .split("")
      .reduce((a, b) => a * b);

    result++;
  }

  return result;
}

// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec
