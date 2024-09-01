function feast(beast, dish) {
  if (
    beast[0] === dish[0] &&
    beast[beast.length - 1] === dish[dish.length - 1]
  ) {
    return true;
  } else {
    return false;
  }
}

feast("great blue heron", "garlic naan");

// https://www.codewars.com/kata/5aa736a455f906981800360d
