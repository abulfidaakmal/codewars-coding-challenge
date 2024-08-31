function doubleChar(str) {
  const result = [...str];

  for (let i = 0; i < result.length; i++) {
    result[i] += result[i];
  }

  return result.join("");
}

// https://www.codewars.com/kata/56b1f01c247c01db92000076
