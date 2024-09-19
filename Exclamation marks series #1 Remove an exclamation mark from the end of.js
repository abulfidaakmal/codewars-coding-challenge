function remove(string) {
  const length = string.length;

  if (string[length - 1] === "!") {
    return string.slice(0, string.length - 1);
  }

  return string;
}

// https://www.codewars.com/kata/57fae964d80daa229d000126
