function powersOfTwo(n) {
  const result = [];

  for (let i = 0; i <= n; i++) {
    result.push(2 ** i);
  }

  return result;
}

// https://www.codewars.com/kata/57a083a57cb1f31db7000028
