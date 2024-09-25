function warnTheSheep(queue) {
  queue = queue.reverse();

  const wolf = queue.indexOf("wolf");

  if (wolf) {
    return `Oi! Sheep number ${wolf}! You are about to be eaten by a wolf!`;
  }

  return "Pls go away and stop eating my sheep";
}

// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15
