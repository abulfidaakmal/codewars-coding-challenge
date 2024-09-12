function accum(s) {
  const result = [];

  for (let i = 1; i <= s.length; i++) {
    const char = s[i - 1];

    for (let j = 1; j <= i; j++) {
      if (j === 1) {
        result.push(char.toUpperCase());
      } else {
        result.push(char.toLowerCase());
      }
    }

    if (i < s.length) {
      result.push("-");
    }
  }

  return result.join("");
}

// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
