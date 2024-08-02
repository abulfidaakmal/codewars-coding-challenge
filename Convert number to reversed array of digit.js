function digitize(n) {
  const data = new Array(...n.toString());
  const result = [];

  for (let i = 0; i < data.length; i++) {
    result.push(parseInt(data[data.length - i - 1]));
  }

  return result;
}

digitize(35231);

// https://www.codewars.com/kata/5583090cbe83f4fd8c000051
