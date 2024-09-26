function distinct(a) {
  const result = [];

  for (let i = 0; i < a.length; i++) {
    if (!result.includes(a[i])) {
      result.push(a[i]);
    }
  }

  return result;
}

// https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118
