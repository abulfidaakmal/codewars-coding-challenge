function reverse(string) {
  string = string.split(" ");

  const result = [];

  for (let i = string.length - 1; i >= 0; i--) {
    result.push(string[i]);
  }

  return result.join(" ");
}

// https://www.codewars.com/kata/57a55c8b72292d057b000594
