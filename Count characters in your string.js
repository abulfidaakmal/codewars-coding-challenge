function count(string) {
  const result = {};
  const temp = [];

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (temp.includes(char)) {
      result[char] = result[char] + 1;
    } else {
      result[char] = 1;
      temp.push(char);
    }
  }

  return result;
}

// https://www.codewars.com/kata/52efefcbcdf57161d4000091
