function getMiddle(s) {
  const length = s.length;
  const middle = (length - 1) / 2;

  if (length % 2 === 0) {
    return s.slice(middle, middle + 2);
  }

  return s[middle];
}

// https://www.codewars.com/kata/56747fd5cb988479af000028
