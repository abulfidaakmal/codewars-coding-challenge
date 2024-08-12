function betterThanAverage(classPoints, yourPoints) {
  let total = 0;
  for (const data of classPoints) {
    total += data;
  }

  return total / classPoints.length <= yourPoints;
}

betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50);

// https://www.codewars.com/kata/5601409514fc93442500010b
