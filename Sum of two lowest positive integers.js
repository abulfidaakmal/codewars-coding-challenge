function sumTwoSmallestNumbers(numbers) {
  numbers = numbers.sort((a, b) => a - b);

  return numbers[0] + numbers[1];
}

// https://www.codewars.com/kata/558fc85d8fd1938afb000014
