var uniqueInOrder = function (iterable) {
  const result = [];

  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i - 1]) {
      result.push(iterable[i]);
    }
  }

  return result;
};

// https://www.codewars.com/kata/54e6533c92449cc251001667
