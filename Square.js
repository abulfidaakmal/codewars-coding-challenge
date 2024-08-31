function squareSum(numbers) {
  return numbers.map((value) => value ** 2).reduce((acc, curr) => acc + curr, 0);
}

// https://www.codewars.com/kata/515e271a311df0350d00000f