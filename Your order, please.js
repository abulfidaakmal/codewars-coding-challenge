function order(words) {
  words = words.split(" ");
  const result = [];

  for (let i = 0; i < words.length; i++) {
    const data = words.filter((word) => word.includes(i + 1));
    result.push(data);
  }

  return result.join(" ");
}

// https://www.codewars.com/kata/55c45be3b2079eccff00010f
