function descendingOrder(n) {
  const value = n.toString().split("").sort();
  const result = [];

  for (let i = value.length; i >= 0; i--) {
    result.push(value[i]);
  }

  return Number(result.join(""));
}

// https://www.codewars.com/kata/5467e4d82edf8bbf40000155
