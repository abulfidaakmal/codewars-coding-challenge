function smash(words) {
  if (!words.length) return "";

  return words.reduce((acc, curr) => acc + " " + curr);
}

// https://www.codewars.com/kata/53dc23c68a0c93699800041d
