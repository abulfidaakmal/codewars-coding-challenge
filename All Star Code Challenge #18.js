function strCount(str, letter) {
  return [...str].filter((data) => data === letter).length;
}

strCount("Hello", "o");

// https://www.codewars.com/kata/5865918c6b569962950002a1
