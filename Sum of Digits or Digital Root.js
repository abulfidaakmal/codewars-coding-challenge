function digitalRoot(n) {
  while (n >= 10) {
    n = n
      .toString()
      .split("")
      .reduce((prev, curr) => prev + +curr, 0);
  }
  return n;
}

{
  function digital_root(n) {
    return ((n - 1) % 9) + 1;
  }
}

// https://www.codewars.com/kata/541c8630095125aba6000c00
