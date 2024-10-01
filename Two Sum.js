function twoSum(numbers, target) {
  const result = new Map();

  for (let i = 0; i < numbers.length; i++) {
    const complement = target - numbers[i];

    if (result.has(complement)) {
      console.info([result.get(complement), i]);
      return [result.get(complement), i];
    }

    result.set(numbers[i], i);
  }
}

// https://www.codewars.com/kata/52c31f8e6605bcc646000082
