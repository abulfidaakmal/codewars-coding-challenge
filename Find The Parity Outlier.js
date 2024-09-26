function findOutlier(integers) {
  const odd = integers.filter((value) => Math.abs(value % 2) === 1);
  const even = integers.filter((value) => value % 2 === 0);

  if (odd.length > 1) {
    return even[0];
  }

  return odd[0];
}

// https://www.codewars.com/kata/5526fc09a1bbd946250002dc
