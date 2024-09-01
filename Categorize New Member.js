function openOrSenior(data) {
  const result = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i][0] >= 55 && data[i][1] > 7) {
      result.push("Senior");
    } else {
      result.push("Open");
    }
  }

  return result;
}

// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa
