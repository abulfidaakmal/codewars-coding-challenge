function getSum(a, b) {
  const start = Math.min(a, b);
  const end = Math.max(a, b);

  return ((end - start + 1) * (start + end)) / 2;
}

// https://www.codewars.com/kata/55f2b110f61eb01779000053
