function spinWords(string) {
  const data = string.split(" ");
  const result = [];

  function reverse(value) {
    const data = [];
    for (let i = value.length; i >= 0; i--) {
      data.push(value[i]);
    }

    return data.join("");
  }

  for (let i = 0; i < data.length; i++) {
    if (data[i].length >= 5) {
      result.push(reverse(data[i]));
    } else {
      result.push(data[i]);
    }
  }

  return result.join(" ");
}

// https://www.codewars.com/kata/5264d2b162488dc400000001
