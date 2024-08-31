function findAverage(array) {
  let total = 0;

  if (!array.length) return total;

  for (const value of array) {
    total += value;
  }

  return total / array.length;
}

// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921
