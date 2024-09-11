function solution(number) {
  const values = [];

  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      values.push(i);
    }
  }

  let result = 0;
  for (const value of values) {
    result += value;
  }

  return result;
}

// https://www.codewars.com/kata/514b92a657cdc65150000006
