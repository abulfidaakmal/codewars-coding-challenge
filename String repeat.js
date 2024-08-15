function repeatStr(n, s) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(s);
  }

  return result.join("");
}

repeatStr(3, "*");

// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e
