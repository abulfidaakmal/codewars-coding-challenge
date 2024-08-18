function findShort(s) {
  s = s.split(" ");

  return Math.min(...s.map((result) => result.length));
}

// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9
