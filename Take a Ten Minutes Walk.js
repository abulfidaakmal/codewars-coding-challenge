function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false;
  }

  let northSouth = 0;
  let eastWest = 0;

  walk.map((value) => {
    if (value === "n") {
      northSouth += 1;
    } else if (value === "s") {
      northSouth -= 1;
    } else if (value === "e") {
      eastWest += 1;
    } else if (value === "w") {
      eastWest -= 1;
    }
  });

  return northSouth === 0 && eastWest === 0;
}

// https://www.codewars.com/kata/54da539698b8a2ad76000228
