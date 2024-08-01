String.prototype.toAlternatingCase = function () {
  const result = [];

  for (let char of this) {
    if (char === char.toLowerCase()) {
      result.push(char.toUpperCase());
    } else {
      result.push(char.toLowerCase());
    }
  }

  return result.join("");
};

console.info("hello world".toAlternatingCase() === "HELLO WORLD");

// https://www.codewars.com/kata/56efc695740d30f963000557
