function points(games) {
  const values = [];
  let result = 0;

  games.map((game) => {
    const score = game.split(":");
    const x = score[0];
    const y = score[1];

    if (x > y) {
      values.push(3);
    } else if (x === y) {
      values.push(1);
    }
  });

  for (const value of values) {
    result += value;
  }

  return result;
}

// https://www.codewars.com/kata/5bb904724c47249b10000131
