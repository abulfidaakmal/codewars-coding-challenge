var capitals = function (word) {
  const result = [];

  word.split("").map((value, index) => {
    if (value === value.toUpperCase()) {
      result.push(index);
    }
  });

  return result;
};

// https://www.codewars.com/kata/539ee3b6757843632d00026b
