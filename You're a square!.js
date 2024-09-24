var isSquare = function (n) {
  if (n < 0) {
    return false;
  }

  const square = Math.sqrt(n);

  return Number.isInteger(square);
};

// https://www.codewars.com/kata/54c27a33fb7da0db0100040e
