function getCount(str) {
  const data = str.match(/[aiueo]/gi);

  return data ? data.length : 0
}

// https://www.codewars.com/kata/54ff3102c1bad923760001f3