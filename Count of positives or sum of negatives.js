function countPositivesSumNegatives(input) {
  if (input?.length) {
    const positive = input.filter((value) => value > 0).length;
    const negative = input
      .filter((value) => value < 0)
      .reduce((acc, curr) => acc + curr, 0);

    return [positive, negative];
  } else {
    return [];
  }
}

// https://www.codewars.com/kata/576bb71bbbcf0951d5000044
