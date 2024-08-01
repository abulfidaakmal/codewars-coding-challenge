function grow(x) {
  let total = 1;
  for (const value of x) {
    total *= value;
  }

  return total;
}

grow([1, 2, 3]);

// https://www.codewars.com/kata/57f780909f7e8e3183000078
