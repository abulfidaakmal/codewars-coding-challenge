function highAndLow(numbers) {
  numbers = numbers.split(" ");

  const max = Math.max(...numbers);
  const min = Math.min(...numbers);

  return `${max} ${min}`;
}

// https://www.codewars.com/kata/554b4ac871d6813a03000035