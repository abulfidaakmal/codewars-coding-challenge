function deleteNth(arr, n) {
  const result = [];
  const count = [];

  for (const value of arr) {
    if (count[value]) {
      count[value]++;
    } else {
      count[value] = 1;
    }

    if (count[value] <= n) {
      result.push(value);
    }
  }

  return result;
}

// https://www.codewars.com/kata/554ca54ffa7d91b236000023
