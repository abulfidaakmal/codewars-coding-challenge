function XO(str) {
  const x = str.match(/['x']/gi)?.length;
  const o = str.match(/['o']/gi)?.length;

  if (x === o || x === 0 || o === 0) {
    return true;
  }

  return false;
}

// https://www.codewars.com/kata/55908aad6620c066bc00002a
